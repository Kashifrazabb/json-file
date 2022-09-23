import { Router } from "express"
import MobileDetect from "mobile-detect"
import os from "os"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    var md = new MobileDetect(req.headers['user-agent']);
    res.json(md.version('Webkit'));
})

export default router