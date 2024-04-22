class BusService{
    db = new PrismaClient()
    async getAll() {
        return this.db.bus.findMany();
    }

    async getById(id) {
        return this.db.bus.findUnique({where: {id: +id}});
    }

    async create(number, corpus_id, address, address_uri) {
        return this.db.bus.create({
            data: {
                number: +number,
                corpus_id: +corpus_id,
                address: +address,
                address_uri: +address_uri
            }
        })
    }

    async update(id, number, corpus_id, address, address_uri) {
        return this.db.bus.update({
            where: {
                id: +id
            },
            data: {
                number,
                corpus_id,
                address,
                address_uri
            }
        })
    }

    async delete(id) {
        return this.db.bus.delete({
            where: {
                id
            }
        })
    }
}