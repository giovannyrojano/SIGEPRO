const {register} = require("./user.ops")

const newUser = async (request, response) => {
    //tomar parametros del cuerpo de una petición
    const { name,lastName, email, password } = request.body;
    try {
      result = await register(name,lastName,email, password);
      response.status(200).json({
        msg: "usuario registrado",
        result,
      });
    } catch (error) {
      return response.status(400).json({
        error: "true",
        msg: error,
      });
    }
  };
  


  module.exports = {
    newUser
  }