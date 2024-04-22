import {PrismaClient} from "@prisma/client";

class TeacherService {
    prisma = new PrismaClient()

    async getTeachers() {
        return this.prisma.teacher.findMany({
            select: {
                id: true,
                email: true,
                first_name: true,
                last_name: true
            }
        });
    }

    async getTeacher(id) {
        return this.prisma.teacher.findUnique({
            where: {id: +id},
            select: {
                id: true,
                email: true,
                first_name: true,
                last_name: true
            }
        })
    }
}

export default new TeacherService()