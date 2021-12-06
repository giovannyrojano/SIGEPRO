const {getProjects,getProjectById,create,finishProject} = require("./projects.ops")

//obtener todos los proyectos registrados
const getAllProjects = async (request,response) =>{
    try{
        const result = await getProjects();
        response.status(200).json({
          result,
        });
    }catch(error){
        return response.status(500).json({
            error: "true",
            msg: error,
          });
    }
}

//obtener un proyecto por su id
const getProject = async (request,response) =>{
  const { id } = request.body;
  try{
      const result = await getProjectById(id);
      response.status(200).json({
        result,
      });
  }catch(error){
      return response.status(500).json({
          error: "true",
          msg: error,
        });
  }
}

const newProject = async (request, response) => {
    //tomar parametros del cuerpo de una petición
    const { title,description,start_Date,state } = request.body;
    try {
      result = await create(title,description,start_Date,state);
      response.status(200).json({
        msg: "proyecto registrado",
        result,
      });
    } catch (error) {
      return response.status(400).json({
        error: "true",
        msg: error,
      });
    }
  }

const finish = async (request,response)=>{
  const {id , date} = request.body
  try{
    result = await finishProject(id,date)
    response.status(200).json({
      msg:"edicion exitosa",
      result
    })
  }catch(error){
    return response.status(400).json({
      error: "true",
      msg: error,
    });
  }
}

  module.exports ={
      newProject,
      getAllProjects,
      getProject,
      finish
  }