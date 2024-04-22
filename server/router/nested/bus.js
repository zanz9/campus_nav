import {Router} from "express";
import BusController from "../../packages/bus/BusController.js";
const busRouter = Router()

busRouter.get('/', BusController.getAll)
busRouter.get('/:id', BusController.getBus)
busRouter.post('/', BusController.create)
busRouter.put('/:id', BusController.update)
busRouter.delete('/:id', BusController.delete)
export default busRouter