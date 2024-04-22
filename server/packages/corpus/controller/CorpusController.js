import CorpusService from "../service/CorpusService.js";

class CorpusController {
    async getAll(req, res, next) {
        try {
            const corpus = await CorpusService.getAll()
            return res.json(corpus)
        } catch (e) {
            next(e)
        }
    }

    async getCorpus(req, res, next) {
        try {
            const {id} = req.params
            const corpus = await CorpusService.getCorpus(+id)
            return res.json(corpus)
        } catch (e) {
            next(e)
        }
    }

    async create (req, res, next) {
        try {
            const {campus_id, number} = req.body
            const corpus = await CorpusService.create(campus_id, number)
            return res.json(corpus)
        } catch (e) {
            next(e)
        }
    }

    async update (req, res, next) {
        try {
            const {id} = req.params
            const {campus_id, number} = req.body
            const corpus = await CorpusService.update(+id, campus_id, number)
            return res.json(corpus)
        } catch (e) {
            next(e)
        }
    }

    async delete (req, res, next) {
        try {
            const {id} = req.params
            const corpus = await CorpusService.delete(+id)
            return res.json(corpus)
        } catch (e) {
            next(e)
        }
    }
}

export default new CorpusController()