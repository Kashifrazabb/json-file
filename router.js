import { Router } from "express"
import MobileDetect from "mobile-detect"
import os from "os"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    var md = new MobileDetect(req.headers['user-agent']);
    // res.send(os.hostname())
    res.send(md.versionStr)
})

export default router