import { Router } from "express"
import os from "os"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    var host = os.hostname()
    if (host === "DESKTOP-MHCNGL6")
        res.json("OK")
    else
        res.json("NOT OK")
})

export default router