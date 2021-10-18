require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const port =7000

const app = express()

app.use(express.json())


app.get("/", (req, res) => {
res.send("server is now up and running")
})

app.listen(port, (req, res)=>{
    console.log(`server is listening to :${port}`)
})
