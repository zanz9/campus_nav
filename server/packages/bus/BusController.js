import {BusService} from "./BusService.js";
class BusController{

    async getAll(req, res, next) {
        try {
            const classrooms = await BusService.getAll()
            res.json(classrooms)
        } catch (e) {
            next(e)
        }
    }

    async getById(req, res, next) {
        try {
            const classroom = await BusService.getById(+req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async create(req, res, next) {
        try {
            const {number, corpus_id, address, address_uri} = req.body
            const classroom = await BusService.create(number, corpus_id, address, address_uri)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async update(req, res, next) {
        try {
            const {number, corpus_id, address, address_uri} = req.body
            const classroom = await BusService.update(req.params.id, number, corpus_id, address, address_uri)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }

    async delete(req, res, next) {
        try {
            const classroom = await BusService.delete(+req.params.id)
            res.json(classroom)
        } catch (e) {
            next(e)
        }
    }
}