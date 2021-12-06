const router = require("express").Router()
const user = require("./user/user.routes")
const projects = require("./projects/projects.routes")
const activities = require("./activities/activities.routes")

router.use("/users", user)
router.use("/projects", projects)
router.use("/activities", activities)
module.exports = router
