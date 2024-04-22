import LevelService from "./LevelService.js";

class LevelController {
    async getAll(req, res, next) {
        try {
            const levels = await LevelService.getAll()
            res.json(levels)
        }
        catch (e){
            next(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const level = await LevelService.getOne(req.params.id)
            res.json(level)
        }
        catch (e){
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {number, corpus_id} = req.body
            const level = await LevelService.create(number, corpus_id)
            res.json(level)
        }
        catch (e){
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {number, corpus_id} = req.body
            const level = await LevelService.update(req.params.id, number, corpus_id)
            res.json(level)
        }
        catch (e){
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const level = await LevelService.delete(req.params.id)
            res.json(level)
        }
        catch (e){
            next(e)
        }
    }
}

export default new LevelController()