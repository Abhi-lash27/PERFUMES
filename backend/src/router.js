import { Router } from 'express'
import {newOrder} from "./handlers/order.js";

const router = Router()

router.post('/orders', newOrder)

export default router