const router = require("express").Router();
const user = require("./user/user.routes");
const projects = require("./projects/projects.routes")


router.use("/users",user)
router.use("/projects",projects)
module.exports=router;