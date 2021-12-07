const { Router } = require('express')
const router = Router()
const {
  activityByProjectController,
  getActivitiesController,
  getActivityController,
} = require('./activities.controller')

// ruta para obtener todas las actividades
router.get('/', getActivitiesController)
// ruta para obtener todas las actividades de un proyecto
router.post('/byProject', activityByProjectController)
// ruta para obtener una actividad por su id
router.post('/byId', getActivityController)

module.exports = router
