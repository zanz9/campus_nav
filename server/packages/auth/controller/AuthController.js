import {validationResult} from "express-validator";
import ApiError from "../../../exceptions/ApiError.js";
import AuthService from "../service/AuthService.js";

class AuthController {
    async register(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return next(ApiError.BadRequest('Неправильно переданы данные', errors.array()))

            const {email, password, firstName, lastName} = req.body
            const userData = await AuthService.register(email, password, firstName, lastName)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json({...userData, message: 'Регистрация прошла успешно'})
        } catch (e) {
            next(e)
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await AuthService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json({...userData, message: 'Авторизация прошла успешно'})
        } catch (e) {
            next(e)
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await AuthService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.status(200).json({...userData, message: "Вы успешно вышли"})
        } catch (e) {
            next(e)
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await AuthService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.status(200).json(userData)
        } catch (e) {
            next(e)
        }
    }
}

export default new AuthController()