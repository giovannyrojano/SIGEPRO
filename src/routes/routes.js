const router = require("express").Router();


router.use("/prueba",(request,response)=>{
    response.send("routes working")
})

module.exports=router;