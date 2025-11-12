const express = require("express")
const app = express()
const dotenv =  require("dotenv")
dotenv.config()

const apiRoutes = require("./router/api")
const {connectDB} =  require("./config/db")
connectDB()

app.use(express.json())

app.use("/api",apiRoutes)



let port = process.env.PORT || 5000 
app.listen(port,()=>{
    console.log(`Running on the port ${port}`)
})


