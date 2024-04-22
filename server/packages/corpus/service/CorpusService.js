class CorpusService {
    db = new PrismaClient()
  //get all

    async getAll() {
        return this.db.corpus.findMany()
    }

    async getCorpus(id) {
        return this.db.corpus.findUnique({where: {id: +id}})
    }

    async create(campus_id, number) {
        return this.db.corpus.create({data: {campus_id, number}})
    }

    async update(id, campus_id, number) {
        return this.db.corpus.update({where: {id: +id}, data: {campus_id, number}})
    }

    async delete(id) {
        return this.db.corpus.delete({where: {id: +id}})
    }
}

export default new CorpusService()