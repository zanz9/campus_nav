import {Router} from "express";
import CafeteriaController from "../../packages/cafeteria/CafeteriaController.js";

const cafeteriaRouter = Router()

cafeteriaRouter.get('/', CafeteriaController.getAll)
cafeteriaRouter.get('/:id', CafeteriaController.getById)
cafeteriaRouter.post('/', CafeteriaController.create)
cafeteriaRouter.put('/:id', CafeteriaController.update)
cafeteriaRouter.delete('/:id', CafeteriaController.delete)

export default cafeteriaRouter