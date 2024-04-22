import {PrismaClient} from "@prisma/client";

class LevelService {
    db = new PrismaClient()

    async getAll() {
        return this.db.level.findMany();
    }

    async getOne(id) {
        return this.db.level.findUnique({
            where: {
                id
            }
        });
    }

    async create(number, corpus_id) {
        return this.db.level.create({
            data: {
                number, corpus_id
            }
        });
    }

    async update(id, number, corpus_id) {
        return this.db.level.update({
            where: {
                id
            },
            data: {number, corpus_id}
        });
    }

    async delete(id) {
        return this.db.level.delete({
            where: {
                id
            }
        });
    }
}

export default new LevelService()