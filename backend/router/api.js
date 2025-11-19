const apiRoutes =  require("express").Router()

const userController =  require('../controller/user')


apiRoutes.get("/",(req,res)=>{
    res.send("hello backend")
})

apiRoutes.post("/data",(req,res)=>{
   console.log(req.body)
   res.send("data get..")
})
apiRoutes.post("/regdata",userController.regDataController)
apiRoutes.post("/loginuser",userController.loginDataController)




module.exports = apiRoutes