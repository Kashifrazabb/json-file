import { Router } from "express"
import os from "os"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    res.send("KASHIF")
})

export default router