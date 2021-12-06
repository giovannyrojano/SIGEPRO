/* eslint-disable no-async-promise-executor */
const Project = require('../../models/proyects.model')
const User = require('../../models/user.model')

module.exports = {
  // obtener todos los proyectos
  getProjects() {
    return new Promise(async (resolve, reject) => {
      const getProjects = await Project.find()
      resolve(getProjects)
    })
  },
  // obtener proyecto por su id
  getProjectById(id) {
    return new Promise(async (resolve, reject) => {
      const getProject = await Project.findById(id)
      if (getProject) {
        resolve(getProject)
      } else {
        reject(new Error('el id ingresado no existe en la base de datos'))
      }
    })
  },

  // crear un nuevo proyecto
  create(title, leaderId, description, startDate) {
    return new Promise(async (resolve, reject) => {
      // verificar que el lider exista y tenga ese rol
      const verifyLeader = await User.findById(leaderId)
      if (
        verifyLeader &&
        (verifyLeader.role === 'lider' || verifyLeader.role === 'admin')
      ) {
        // crear nuevo proyecto
        const newProject = new Project({
          title,
          leaderId,
          description,
          startDate,
          end_Date: null,
          state: 'iniciado',
        })
        // verificar que no exista un proyecto igual
        const verifyProject = await Project.findOne({ title })
        if (verifyProject) {
          reject(new Error('este proyecto ya esta registrado'))
        } else {
          await newProject.save()
          resolve('proyecto registrado')
        }
      } else {
        reject(new Error('no tiene permisos para crear un proyecto'))
      }
    })
  },
  // finalizar un proyecto
  finishProject(id, date) {
    return new Promise(async (resolve, reject) => {
      const verifyProject = await Project.findById(id)
      if (verifyProject) {
        const updateProject = await Project.findByIdAndUpdate(id, {
          state: 'finalizado',
          end_Date: date,
        })
        resolve('proyecto finalizado', updateProject)
      } else {
        reject(
          new Error(`el proyecto con el id ${id} no existe en la base de datos`)
        )
      }
    })
  },
  // lista de proyectos iniciados
  getInitProjects() {
    return new Promise(async (resolve, reject) => {
      const getProject = await Project.find({ state: 'iniciado' })
      if (getProject.length > 0) {
        resolve(getProject)
      } else {
        reject(new Error('no hay proyectos iniciados actualmente'))
      }
    })
  },
  // lista de proyectos finalizados
  getFinishedProjects() {
    return new Promise(async (resolve, reject) => {
      const getProject = await Project.find({ state: 'finalizado' })
      if (getProject.length > 0) {
        resolve(getProject)
      } else {
        reject(new Error('no hay proyectos finalizados actualmente'))
      }
    })
  },
}
