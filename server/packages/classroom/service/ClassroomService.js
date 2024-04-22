import {PrismaClient} from "@prisma/client";

class ClassroomService {
    prisma = new PrismaClient()

    async getClassrooms() {
        return this.prisma.classroom.findMany()
    }

    async getClassroom(id) {
        return this.prisma.classroom.findUnique({where: {id: +id}})
    }

    async create(number, teacher_id, level_id) {
        const currentTimestamp = Date.now()
        console.log(currentTimestamp)

        return this.prisma.classroom.create({
            data: {
                number: +number,
                teacher_id: +teacher_id,
                level_id: +level_id,
                created_at: currentTimestamp
            }
        })
    }

    async update(id, number, teacher_id) {
        const now = Date.now()
        return this.prisma.classroom.update({
            where: {id: +id},
            data: {
                number, teacher_id, teacher_timestamp: now
            }
        })
    }

    async delete(id) {
        return this.prisma.classroom.delete({where: {id: +id}})
    }
}

export default new ClassroomService()