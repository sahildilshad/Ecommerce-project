const apiRoutes =  require("express").Router()




apiRoutes.get("/",(req,res)=>{
    res.send("hello backend")
})

apiRoutes.post("/data",(req,res)=>{
   console.log(req.body)
   res.send("data get..")
})
module.exports = apiRoutes