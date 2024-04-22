import {Router} from "express";
import ClassroomController from "../../packages/classroom/controller/ClassroomController.js";
const classroomRouter = Router()

classroomRouter.get('/', ClassroomController.getAll)
classroomRouter.get('/:id', ClassroomController.getClassroom)
classroomRouter.post('/', ClassroomController.create)
classroomRouter.put('/:id', ClassroomController.update)
classroomRouter.delete('/:id', ClassroomController.delete)
export default classroomRouter