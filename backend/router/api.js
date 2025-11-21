const apiRoutes =  require("express").Router()

const userController =  require('../controller/user')
const adminController = require("../controller/admin")

apiRoutes.get("/",(req,res)=>{
    res.send("hello backend")
})

apiRoutes.post("/data",(req,res)=>{
   console.log(req.body)
   res.send("data get..")
})
apiRoutes.post("/regdata",userController.regDataController)
apiRoutes.post("/loginuser",userController.loginDataController)
apiRoutes.post("/addadminproduct",adminController.addadminproductController)
apiRoutes.get("/getproduct",adminController.getAllProductController)
apiRoutes.delete("/productdelete/:abc",adminController.deleteProductController)
apiRoutes.get("/editvaluedata/:abc",adminController.editvaluedataController)
apiRoutes.post("/productupdate/:abc",adminController.productUpdateController)

module.exports = apiRoutes