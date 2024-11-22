require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
require("./connection/db")
const cors = require('cors')
const router = require("./routes/router")


const app = express();


app.use(cors());
app.use(express.json())
app.use(router)

// app.use(router)


const PORT = 3000 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`cookpediaServer started successfully at port:${PORT}`)
})
app.get("/",(req,res)=>{
    res.status(200).send(`<h1>helllooooooiiii</h1>`)
})