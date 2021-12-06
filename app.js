const express = require("express")
const cors = require("cors")
require("dotenv").config({ path: "./src/env/.env" })
const { dbConnection } = require("./src/config/database")
const morgan = require("morgan")
const router = require("./src/routes/routes")

const AppError = require("./src/helpers/appError")
const { errorHandler } = require("./src/middlewares/errorHandler")

// constante para iniciar el servidor
const app = express()
// conexion con la base de datos
dbConnection()
// uso de cors para poder tener acceso al servidor desde el lado del cliente
app.use(cors())
// morgan para llevar un registro de las peticiones que se hacen al servidor
app.use(morgan("dev"))
// procesar datos enviados desde el cliente
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// rutas principales de la aplicacion
app.get("/", (request, response) => {
  response.send("servidor de gestion de proyectos de guerrilla games")
})
// ruta principal
app.use("/api", router)

// rutas inexistentes
app.all("*", (request, response, next) => {
  next(
    new AppError(
      `no se encuentra la ruta ${request.originalUrl} en el servidor`
    )
  )
})
// middleware para capturar errores
app.use(errorHandler)

// listen
app.listen(process.env.PORT || 3000, () => {
  console.log("Server On , port : ", process.env.port || 3000)
})
