import {PrismaClient} from "@prisma/client";

class CafeteriaService {
    db = new PrismaClient()

    async getAll() {
        return this.db.cafeteria.findMany();
    }

    async getById(id) {
        return this.db.cafeteria.findUnique({where: {id: +id}});
    }

    async create(level_id) {
        return this.db.cafeteria.create({data: {level_id: +level_id}})
    }

    async update(id, level_id) {
        return this.db.cafeteria.update({where: {id: +id}, data: {level_id}});
    }

    async delete(id) {
        return this.db.cafeteria.delete({where: {id: +id}});
    }
}

export default new CafeteriaService()