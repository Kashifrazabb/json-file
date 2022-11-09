import { Router } from "express"
import data from "./db.json" assert { type: "json" }

const router = Router()

router.get("/v1", (req, res) => {
    var site = req.query.site.replace(".com", "");
    var sig = req.query.sig;
    var val;
    // for (let i = 0; i < data[site].length; i++) {
    //     if (data[site][i].sig === sig) {
    //         val = "true"
    //     }
    // }
    // if (!val) { val = "false" }
    res.send(data[site][0].sig == sig)
})

export default router