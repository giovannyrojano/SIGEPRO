const { Router } = require("express")
const { check } = require("express-validator")
const {
  newProject,
  getAllProjects,
  getProject,
  finish,
  initProjects,
  finishedProjects,
} = require("./projects.controller")
const { admin, lider, subAlterno } = require("../../middlewares/roles")
const router = Router()

router.get("/", getAllProjects)
router.get("/init", initProjects)
router.get("/finished", finishedProjects)
router.put("/", finish)
router.post("/project", getProject)
router.post("/create", newProject)

module.exports = router
