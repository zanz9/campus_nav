import {Router} from 'express'
import authRouter from "./nested/auth.js";
import teacherRouter from "./nested/teacher.js";
import corpusRouter from "./nested/corpus.js";
import corpusCampus from "./nested/campus.js";
import cafeteriaRouter from "./nested/cafeteria.js";
import levelRouter from "./nested/level.js";
import busRouter from "./nested/bus.js";
import qrRouter from "./nested/qr.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/teacher', teacherRouter)
router.use('/corpus', corpusRouter)
router.use('/campus', corpusCampus)
router.use('/cafeteria', cafeteriaRouter)
router.use('/level', levelRouter)
router.use('/bus', busRouter)
router.use('/qr', qrRouter)


export default router