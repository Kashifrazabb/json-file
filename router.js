import { Router } from "express"
import data from "./db.json" assert { type: "json" }

const router = Router()

router.get("/mob", (req, res) => {
    res.send(data.users__mob)
})

router.get("/com", (req, res) => {
    res.send(data.users__pc)
})

export default router