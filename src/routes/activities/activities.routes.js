const { Router } = require("express")
const router = Router()

router.get("/", (request, response) => {
  response.send("ruta de actividades")
})

module.exports = router
