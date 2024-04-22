import TokenService from "../auth/service/TokenService.js";
import ClassroomService from "../classroom/service/ClassroomService.js";

class QRScanService {
    async scan(id, refreshToken) {
        const teacherData = await TokenService.refreshToken(refreshToken)

        const classroom = await ClassroomService.getClassroom(id)
        if (classroom.teacher_id === teacherData.id) {
            await ClassroomService.update(id, null)
        } else {
            await ClassroomService.update(id, teacherData.id)
        }
        return teacherData.refreshToken
    }
}

export default new QRScanService()