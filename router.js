import { Router } from "express"
import path from "path"
// import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    var userName = process.env['USERPROFILE'].split(path.sep)[2];
    var computerName = process.env['COMPUTERNAME'];
    var loginId1 = path.join("domainName", userName);
    var loginId2 = path.join("computerName", computerName);
    res.json(loginId1 + loginId2)
})

export default router