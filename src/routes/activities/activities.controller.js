const {
  getActivities,
  getActivityById,
  getActivityByProject,
} = require('./activities.ops')

// obtener todas las actividades
const getActivitiesController = async (request, response) => {
  try {
    const result = await getActivities()
    response.status(200).json({
      result,
    })
  } catch (error) {
    return response.status(500).json({
      error: 'true',
      msg: error,
    })
  }
}

// obtener una Actividad por su id
const getActivityController = async (request, response) => {
  const { id } = request.body
  try {
    const result = await getActivityById(id)
    response.status(200).json({
      result,
    })
  } catch (error) {
    return response.status(500).json({
      error: 'true',
      msg: error,
    })
  }
}
// obtener el listado de actividades de un proyecto
const activityByProjectController = async (request, response) => {
  const { id } = request.body
  try {
    const result = await getActivityByProject(id)
    response.status(200).json({
      result,
    })
  } catch (error) {
    return response.status(500).json({
      error: 'true',
      msg: error,
    })
  }
}

module.exports = {
  getActivityController,
  activityByProjectController,
  getActivitiesController,
}
