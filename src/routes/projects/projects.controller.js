const {
  getProjects,
  getProjectById,
  create,
  finishProject,
  getInitProjects,
  getFinishedProjects,
} = require('./projects.ops')

// obtener todos los proyectos registrados
const getAllProjects = async (request, response) => {
  try {
    const result = await getProjects()
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

// obtener un proyecto por su id
const getProject = async (request, response) => {
  const { id } = request.body
  try {
    const result = await getProjectById(id)
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

const newProject = async (request, response) => {
  // tomar parametros del cuerpo de una petición
  const { title, leaderId, description, startDate, state } = request.body
  try {
    const result = await create(title, leaderId, description, startDate, state)
    response.status(200).json({
      msg: 'proyecto registrado',
      result,
    })
  } catch (error) {
    return response.status(400).json({
      error: 'true',
      msg: error,
    })
  }
}
// finalizar un proyecto
const finish = async (request, response) => {
  const { id, date } = request.body
  try {
    const result = await finishProject(id, date)
    response.status(200).json({
      msg: 'edicion exitosa',
      result,
    })
  } catch (error) {
    return response.status(500).json({
      error: 'true',
      msg: error,
    })
  }
}

// lista de proyectos iniciados
const initProjects = async (request, response) => {
  try {
    const result = await getInitProjects()
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

// lista de proyectos finalizados
const finishedProjects = async (request, response) => {
  try {
    const result = await getFinishedProjects()
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
  newProject,
  getAllProjects,
  getProject,
  finish,
  initProjects,
  finishedProjects,
}
