const { register, login } = require('./user.ops')

const newUser = async (request, response) => {
  // tomar parametros del cuerpo de una petición
  const { name, lastName, email, password, role } = request.body
  try {
    const result = await register(name, lastName, email, password, role)
    response.status(200).json({
      msg: 'usuario registrado',
      result,
    })
  } catch (error) {
    return response.status(400).json({
      error: 'true',
      msg: error,
    })
  }
}

const Login = async (request, response) => {
  // tomar parametros del cuerpo de una petición
  const { email, password } = request.body
  try {
    const result = await login(email, password)
    response.status(200).json({
      msg: 'inicio de sesion exitoso',
      result,
    })
  } catch (error) {
    return response.status(400).json({
      error: 'true',
      msg: error,
    })
  }
}

module.exports = {
  newUser,
  Login,
}
