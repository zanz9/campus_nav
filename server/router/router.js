import {Router} from 'express'
import authRouter from "./nested/auth.js";
import teacherRouter from "./nested/teacher.js";
import corpusRouter from "./nested/corpus.js";
import corpusCampus from "./nested/campus.js";
import cafeteriaRouter from "./nested/cafeteria.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/teacher', teacherRouter)
router.use('/corpus', corpusRouter)
router.use('/campus', corpusCampus)
router.use('/cafeteria', cafeteriaRouter)

export default router