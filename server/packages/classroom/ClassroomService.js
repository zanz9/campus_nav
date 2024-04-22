import {PrismaClient} from "@prisma/client";

class ClassroomService {
    prisma = new PrismaClient()

    async getAll() {
        return this.prisma.classroom.findMany();
    }

    async getById(id) {
        return this.prisma.classroom.findUnique({
            where: {
                id
            }
        })
    }

    async create(data) {
        return this.prisma.classroom.create({
            data
        })
    }

    async update(id, data) {
        return this.prisma.classroom.update({
            where: {
                id
            },
            data
        })
    }

    async delete(id) {
        return this.prisma.classroom.delete({
            where: {
                id
            }
        })
    }
}

export default new ClassroomService()