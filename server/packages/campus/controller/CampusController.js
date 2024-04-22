class CampusController {
    // get all, get by id, create, update, delete

    async getAll(req, res, next) {
        try {
            const campuses = await CampusService.getCampuses()
            return res.json(campuses)
        } catch (e) {
            next(e)
        }
    }

    async getCampus(req, res, next) {
        try {
            const {id} = req.params
            const campus = await CampusService.getCampus(+id)
            return res.json(campus)
        } catch (e) {
            next(e)
        }
    }

    async create (req, res, next) {
        try {
            const {number} = req.body
            const campus = await CampusService.create(number)
            return res.json(campus)
        } catch (e) {
            next(e)
        }
    }

    async update (req, res, next) {
        try {
            const {id} = req.params
            const {number} = req.body
            const campus = await CampusService.update(+id, number)
            return res.json(campus)
        } catch (e) {
            next(e)
        }
    }

    async delete (req, res, next) {
        try {
            const {id} = req.params
            const campus = await CampusService.delete(+id)
            return res.json(campus)
        } catch (e) {
            next(e)
        }
    }
}
export default new CampusController()