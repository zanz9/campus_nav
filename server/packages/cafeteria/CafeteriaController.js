import CafeteriaService from "./CafeteriaService.js";

class CafeteriaController {
    async getAll(req, res, next) {
        try {
            const classrooms = await CafeteriaService.getAll()
            res.json(classrooms)
        } catch (e) {
            next(e)
        }
    }

    async getById(req, res, next) {
        try {
            const classroom = await CafeteriaService.getById(+req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {level_id} = req.body
            const classroom = await CafeteriaService.create(level_id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {level_id} = req.body
            const classroom = await CafeteriaService.update(+req.params.id, +level_id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const classroom = await CafeteriaService.delete(+req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }
}

export default new CafeteriaController()