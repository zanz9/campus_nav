import TeacherService from "./TeacherService.js";

class TeacherController {
    async getTeachers(req, res, next) {
        try {
            const teachers = await TeacherService.getTeachers()
            return res.json(teachers)
        } catch (e) {
            next(e)
        }
    }

    async getTeacher(req, res, next) {
        try {
            const {id} = req.params
            const teacher = await TeacherService.getTeacher(id)
            return res.json(teacher)
        } catch (e) {
            next(e)
        }
    }

}

export default new TeacherController()