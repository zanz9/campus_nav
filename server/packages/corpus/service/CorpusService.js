import {PrismaClient} from "@prisma/client";

class CorpusService {
    db = new PrismaClient()

    async getAll() {
        return this.db.corpus.findMany()
    }

    async getCorpus(id) {
        return this.db.corpus.findUnique({where: {id: +id}})
    }

    async create(campus_id, number) {
        return this.db.corpus.create({data: {campus_id: +campus_id, number: +number}})
    }

    async update(id, campus_id, number) {
        return this.db.corpus.update({where: {id: +id}, data: {campus_id: +campus_id, number: +number}})
    }

    async delete(id) {
        return this.db.corpus.delete({where: {id: +id}})
    }
}

export default new CorpusService()