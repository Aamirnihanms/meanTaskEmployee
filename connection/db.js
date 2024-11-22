const mongoose = require("mongoose")

const connectString = process.env.MONGO_DB

mongoose.connect(connectString).then(res=>{
    console.log("Database connected successfully with server")
}).catch(err=>{
    console.log("Database connection failed")
    console.log(err)
})
   
