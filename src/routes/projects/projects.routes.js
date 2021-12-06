const { Router } = require("express");
const { check } = require("express-validator");
const {newProject,getAllProjects,getProject,finish} = require("./projects.controller")
const {admin,lider,subAlterno} = require("../../middlewares/roles")
const router = Router();

router.get("/",getAllProjects);
router.put("/",finish)
router.post("/project",getProject)
router.post("/create",newProject)


module.exports = router