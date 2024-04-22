import {PrismaClient} from "@prisma/client";

class CampusService {
    prisma = new PrismaClient()
}

export default new CampusService()