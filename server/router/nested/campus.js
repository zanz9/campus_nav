import {Router} from "express";
import CampusController from "../../packages/campus/controller/CampusController.js";
const campusRouter = Router()

campusRouter.get('/', CampusController.getAll)
campusRouter.get('/:id', CampusController.getCampus)
campusRouter.post('/', CampusController.create)
campusRouter.put('/:id', CampusController.update)
campusRouter.delete('/:id', CampusController.delete)
export default campusRouter