import { Router } from "express"
import dns from "dns"
import data from "./db.json" assert {type: "json"}

const router = Router()

router.get("/", (req, res) => {
    dns.reverse(req.ip, function (err, domains) {
        if (err) {
            res.json(err.toString());
            return;
        }
        res.json(domains)
    });
    // res.json(req.headers["user-agent"])
})

export default router