import express from "express"
import router from "./router.js"

const app = express()
const port = process.env.PORT || 5000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(router)

app.listen(port, _ => console.log(`Server is listening to port ${port}...`))