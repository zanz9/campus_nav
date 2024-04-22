import jwt from 'jsonwebtoken'

const TokenExpiredError = jwt.TokenExpiredError
import {PrismaClient} from "@prisma/client";
import ApiError from "../../../exceptions/ApiError.js";
import TeacherDto from "../../../dto/TeacherDto.js";

const expAccess = '1h'
const expRefresh = '30d'

class TokenService {
    prisma = new PrismaClient()
    teacherDB = this.prisma.teacher

    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, {expiresIn: expAccess})
        const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {expiresIn: expRefresh})
        return {
            accessToken, refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET_ACCESS)
            return new TeacherDto(userData)
        } catch (e) {
            if (e instanceof TokenExpiredError) {
                throw ApiError.Forbidden("Срок действия токена истек")
            }
            throw e
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_SECRET_REFRESH)
            return new TeacherDto(userData)
        } catch (e) {
            if (e instanceof TokenExpiredError) {
                throw ApiError.Forbidden("Срок действия токена истек")
            }
            throw e
        }
    }

    async saveToken(userId, refreshToken) {
        return this.teacherDB.update({where: {id: userId}, data: {refreshToken}});
    }

    async removeToken(refreshToken) {
        const userData = this.validateRefreshToken(refreshToken)
        return this.teacherDB.update({where: {id: userData.id}, data: {refreshToken: null}})
    }

    async refreshToken(refreshToken) {
        const userData = this.validateRefreshToken(refreshToken)
        if (!userData) throw ApiError.UnauthorizedError()

        const userFromDB = await this.prisma.teacher.findFirst({where: {id: userData.id}})
        if (!userFromDB) throw ApiError.UnauthorizedError()
        if (userFromDB.refreshToken !== refreshToken) throw ApiError.UnauthorizedError()
        const userDto = new TeacherDto(userData)
        const tokens = this.generateTokens({...userDto})
        await this.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, teacher: userDto}
    }
}

export default new TokenService()