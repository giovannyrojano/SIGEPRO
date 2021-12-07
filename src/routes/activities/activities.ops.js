/* eslint-disable no-async-promise-executor */
const Activities = require('../../models/activities.model')
const Project = require('../../models/proyects.model')
const User = require('../../models/user.model')

module.exports = {
  // obtener todas las actividades
  getActivities() {
    return new Promise(async (resolve, reject) => {
      const getActivities = await Activities.find()
      resolve(getActivities)
    })
  },
  // obtener una actividad por su id
  getActivityById(id) {
    return new Promise(async (resolve, reject) => {
      const getActivity = await Activities.findById(id)
      if (getActivity) {
        resolve(getActivity)
      } else {
        reject(new Error('el id ingresado no existe en la base de datos'))
      }
    })
  },
  // obtener todas las actividades de un proyecto
  getActivityByProject(id) {
    return new Promise(async (resolve, reject) => {
      const getActivity = await Activities.findById({ projectId: id })
      if (getActivity) {
        resolve(getActivity)
      } else {
        reject(new Error('el id ingresado no existe en la base de datos'))
      }
    })
  },
  // crear una actividad
  createActivity(projectId, userId, estimatedTime, startDate, state) {
    return new Promise(async (resolve, reject) => {
      const verifyProject = await Project.findById(projectId)
      if (verifyProject) {
        const verifyUser = await User.findById(userId)
        if (verifyUser) {
          const newActivity = new Activities(projectId,userId,estimatedTime,startDate,end_Date:null,state:'asignada')
        } else {
          reject(new Error('este usuario no existe'))
        }
      } else {
        reject(new Error('este proyecto no existe'))
      }
    })
  },
}
