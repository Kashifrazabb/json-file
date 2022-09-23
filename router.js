import { Router } from "express"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    res.send(JSON.stringify(data))
})

export default router