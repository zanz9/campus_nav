import {Router} from "express";
import LevelController from "../../packages/level/LevelController.js";

const levelRouter = Router()


levelRouter.get('/', LevelController.getAll)
levelRouter.get('/:id', LevelController.getOne)
levelRouter.post('/', LevelController.create)
levelRouter.put('/:id', LevelController.update)
levelRouter.delete('/:id', LevelController.delete)

export default levelRouter