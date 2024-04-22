import {PrismaClient} from "@prisma/client";
class ClassroomService {
    prisma = new PrismaClient()

    async getClassrooms() {
        return this.prisma.classroom.findMany()
    }

    async getClassroom(id) {
        return this.prisma.classroom.findUnique({where: {id: +id}})
    }

    async create(number) {
        return this.prisma.classroom.create({data: {number}})
    }

    async update(id, number) {
        return this.prisma.classroom.update({where: {id: +id}, data: {number}})
    }

    async delete(id) {
        return this.prisma.classroom.delete({where: {id: +id}})
    }
}

export default new ClassroomService()