import {Router} from 'express'
import authRouter from "./nested/auth.js";
import teacherRouter from "./nested/teacher.js";

const router = Router()

router.use('/auth', authRouter)
router.use('/teacher', teacherRouter)

export default router