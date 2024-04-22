import {PrismaClient} from "@prisma/client";
import bcrypt from 'bcrypt'
import TokenService from "./TokenService.js";
import ApiError from "../../../exceptions/ApiError.js";
import TeacherDto from "../../../dto/TeacherDto.js";

class AuthService {
    prisma = new PrismaClient()
    teacherDB = this.prisma.teacher

    async register(email, password, firstName, lastName) {
        const candidate = await this.teacherDB.findFirst({where: {email}})
        if (candidate) throw ApiError.BadRequest(`Пользователь с почтовый адресом ${email} уже существует`)

        const hashPassword = await bcrypt.hash(password, 3)
        const teacher = await this.teacherDB.create({data: {email, password: hashPassword, first_name: firstName, last_name: lastName}})

        const userDto = new TeacherDto(teacher)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, teacher: userDto}
    }

    async login(email, password) {
        const user = await this.teacherDB.findFirst({where: {email}})
        if (!user) throw ApiError.BadRequest('Непральные данные для входа')

        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) throw ApiError.BadRequest('Непральные данные для входа')

        const userDto = new TeacherDto(user)
        const tokens = TokenService.generateTokens({...userDto})
        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, teacher: userDto}
    }

    async logout(refreshToken) {
        const userData = await TokenService.removeToken(refreshToken)
        return new TeacherDto(userData)
    }

    async refresh(refreshToken) {
        if (!refreshToken) throw ApiError.UnauthorizedError()
        return await TokenService.refreshToken(refreshToken)
    }
}

export default new AuthService()