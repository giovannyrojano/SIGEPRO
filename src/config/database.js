const mongoose = require("mongoose");
require("dotenv").config();

//connection to the DB
const dbConnection = async () => {
  try {
    await mongoose.connect(
        `mongodb+srv://anderson:1234@guerrilla-games.hwfom.mongodb.net/Test?retryWrites=true&w=majority`,

    );
    console.log("successful connection");
  } catch {
    console.log(
      "error de conexión - dirección de base de datos inexistente/inaccesible"
    );
  }
};

module.exports = {
  dbConnection,
};
