import { Router } from "express"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    const ua = req.headers["user-agent"]
    res.send(Object.values(data.users).includes(ua))
})

export default router