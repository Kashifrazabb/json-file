import { Router } from "express"
import data from "./db.json" assert { type: "json" }

const router = Router()

router.get("/v2", (req, res) => {
    var site = req.query.site.replace(".com", "");
    var sig;
    if (req.query.sig.includes("%3B")) {
        sig = req.query.sig.replace("%3B", ";");
    }
    else {
        sig = req.query.sig
    }
    var info = { is: false };
    for (let i = 0; i < data[site].length; i++) {
        if (data[site][i].sig === sig) {
            info = {
                is: true,
                name: data[site][i].name.slice(4),
                id: data[site][i].id,
                email: data[site][i].email,
                flag: data[site][i].flag
            }
            break
        }
    }
    res.send(info)
})

export default router
