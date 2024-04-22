import ClassroomService from "../classroom/ClassroomService.js";

class CafeteriaController {
    async getAll(req, res, next) {
        try {
            const classrooms = await ClassroomService.getAll()
            res.json(classrooms)
        } catch (e) {
            next(e)
        }
    }

    async getById(req, res, next) {
        try {
            const classroom = await ClassroomService.getById(req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {level_id} = req.body
            const classroom = await ClassroomService.create(level_id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const classroom = await ClassroomService.update(req.params.id, req.body)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const classroom = await ClassroomService.delete(req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }
}

export default new CafeteriaController()