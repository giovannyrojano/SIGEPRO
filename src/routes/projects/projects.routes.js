const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

router.get("/",(request,response) =>{
    response.send("ruta de proyectos")
});


module.exports = router