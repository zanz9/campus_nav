import {PrismaClient} from "@prisma/client";

class CampusService {
    prisma = new PrismaClient()

    async getAll() {
        return this.prisma.campus.findMany()
    }

    async getCampus(id) {
        return this.prisma.campus.findUnique({where: {id: +id}})
    }

    async create(number) {
        return this.prisma.campus.create({data: {number}})
    }

    async update(id, number) {
        return this.prisma.campus.update({where: {id: +id}, data: {number}})
    }

    async delete(id) {
        return this.prisma.campus.delete({where: {id: +id}})
    }
}

export default new CampusService()