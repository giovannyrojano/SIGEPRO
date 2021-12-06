const project = require("../../models/proyects.model")

module.exports = {
    //obtener todos los proyectos
    getProjects() {
        return new Promise(async(resolve,reject)=>{
            const getProjects = await project.find();
            resolve(getProjects)
        })
      },
    //obtener proyecto por su id
    getProjectById(id) {
        return new Promise(async(resolve,reject)=>{
            const getProject = await project.findById(id);
            if(getProject){
            resolve(getProject)
            }else{
            reject("el id ingresado no existe en la base de datos")
            }
        })
      },
      
    //crear un nuevo proyecto
    create(title,description,start_Date,state){
        return new Promise(async (resolve,reject)=>{
            //crear nuevo proyecto
            const newProject = new project({title,description,start_Date,end_Date:null,state})
            //verificar que no exista un proyecto igual
            const verifyProject = await project.findOne({title})
            if(verifyProject){
                reject("este proyecto ya esta registrado")
            }else{
                await newProject.save()
                resolve("proyecto registrado")
            }
        })
    },

    finishProject(id,date){
        return new Promise(async (resolve,reject)=>{
            const verifyProject = await project.findById(id)
            if(verifyProject){
                const updateProject = await  project.findByIdAndUpdate(id,{state:"finalizado",end_Date:date})
                resolve("proyecto finalizado")
            }else{
                reject(`el proyecto con el id ${id} no existe en la base de datos`)
            }
        })
    }
}