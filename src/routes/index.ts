 import { Router } from "express";
 import countryRouter from './countries'

const router = Router()

router.use('/countries', countryRouter)

export default router