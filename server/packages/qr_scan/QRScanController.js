import QRScanService from "./QRScanService.js";

class QRScanController {
    async scan(req, res, next) {
        try {
            const {id} = req.params
            const refreshToken = req.cookie.refreshToken
            const refreshTokenNew = await QRScanService.scan(id, refreshToken)
            res.cookie('refreshToken', refreshTokenNew, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
}

export default new QRScanController()