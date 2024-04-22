import {Router} from 'express'
import authRouter from "./nested/auth.js";
import teacherRouter from "./nested/teacher.js";
import cafeteriaRouter from "./nested/cafeteria.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/teacher', teacherRouter)
router.use('/cafeteria', cafeteriaRouter)

export default router