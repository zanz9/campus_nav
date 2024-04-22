import {Router} from "express";
import TeacherController from "../../packages/teacher/TeacherController.js";

const teacherRouter = Router()

teacherRouter.get('/', TeacherController.getTeachers)
teacherRouter.get('/:id', TeacherController.getTeacher)

export default teacherRouter