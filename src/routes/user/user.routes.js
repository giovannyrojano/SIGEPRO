const { Router } = require("express");
const {newUser} = require("./user.controller")

const router = Router();

router.get("/",(request,response) =>{
    response.send("ruta de usuarios")
});
router.post("/register",newUser);


module.exports = router;