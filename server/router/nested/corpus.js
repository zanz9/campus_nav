import {Router} from "express";
import CorpusController from "../../packages/corpus/controller/CorpusController.js";
const corpusRouter = Router()

corpusRouter.get('/', CorpusController.getAll)
corpusRouter.get('/:id', CorpusController.getCorpus)
corpusRouter.post('/', CorpusController.create)
corpusRouter.put('/:id', CorpusController.update)
corpusRouter.delete('/:id', CorpusController.delete)
export default corpusRouter