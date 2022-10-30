import { Router } from "express"
import data from "./db.json" assert { type: "json" }

const router = Router()

router.get("/mobile", (req, res) => {
    res.send(data.users__mob)
})

router.get("/pc", (req, res) => {
    res.send(data.users__pc)
})

export default router