import { Router } from "express"
import data from "./db.json" assert { type: "json" }

const router = Router()

router.get("/v1", (req, res) => {
    var site = req.query.site.replace(".com", "");
    var sig = req.query.sig;
    var val;
    data[site].forEach(item => {
        if (item.sig === sig) {
            val = true
        }
    })
    if (!val) {
        res.send(false)
    }
    res.send(val)
})

export default router