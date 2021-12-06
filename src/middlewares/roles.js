
const { promisify } = require("util");
const jwt = require("jsonwebtoken");

exports.admin = async (request, response, next) => {
    let token = request.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      try {
        const decodificar = await promisify(jwt.verify)(
          token,
          process.env.SECRET_KEY
        );
  
        if (decodificar.role == 'admin') {
          console.log("usuario permitido");
          next();
        } else {
          response.status(401).json({
            error: "unauthorized user",
            msg: "usuario no autorizado",
          });
        }
      } catch (error) {
        response.status(400).json({
          error: error.message,
          msg: "token invalido",
        });
      }
    } else {
      response.status(401).json({
        msg: "token inexistente",
      });
    }
  };

  exports.subAlterno = async (request, response, next) => {
    let token = request.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      try {
        const decodificar = await promisify(jwt.verify)(
          token,
          process.env.SECRET_KEY
        );
  
        if (decodificar.role == 'subalterno' || decodificar.role == 'admin') {
          console.log("usuario permitido");
          next();
        } else {
          response.status(401).json({
            error: "unauthorized user",
            msg: "usuario no autorizado",
          });
        }
      } catch (error) {
        response.status(400).json({
          error: error.message,
          msg: "token invalido",
        });
      }
    } else {
      response.status(401).json({
        msg: "token inexistente",
      });
    }
  };

  exports.lider = async (request, response, next) => {
    let token = request.headers["authorization"];
    if (token) {
      token = token.split(" ")[1];
      try {
        const decodificar = await promisify(jwt.verify)(
          token,
          process.env.SECRET_KEY
        );
  
        if (decodificar.role == 'lider' || decodificar.role == 'admin') {
          console.log("usuario permitido");
          next();
        } else {
          response.status(401).json({
            error: "unauthorized user",
            msg: "usuario no autorizado",
          });
        }
      } catch (error) {
        response.status(400).json({
          error: error.message,
          msg: "token invalido",
        });
      }
    } else {
      response.status(401).json({
        msg: "token inexistente",
      });
    }
  };