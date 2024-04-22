class ClassroomController {

    async getAll(req, res, next) {
        try {
            const classrooms = await ClassroomService.getClassrooms()
            return res.json(classrooms)
        } catch (e) {
            next(e)
        }
    }

    async getClassroom(req, res, next) {
        try {
            const {id} = req.params
            const classroom = await ClassroomService.getClassroom(+id)
            return res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async create (req, res, next) {
        try {
            const {number} = req.body
            const classroom = await ClassroomService.create(number)
            return res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async update (req, res, next) {
        try {
            const {id} = req.params
            const {number} = req.body
            const classroom = await ClassroomService.update(+id, number)
            return res.json(classroom)
        } catch (e) {
            next(e)
        }
    }   

    async delete (req, res, next) {
        try {
            const {id} = req.params
            const classroom = await ClassroomService.delete(+id)
            return res.json(classroom)
        } catch (e) {
            next(e)
        }
    }   
}

export default new ClassroomController()