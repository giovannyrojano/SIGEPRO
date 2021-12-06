const { Schema, model } = require("mongoose");

const userSchema = Schema({
  name: {
    type: String,
    required: [true, "el nombre es obligatorio"],
  },
  lastName: {
    type: String,
    required: [true, "el apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "el correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "la contraseña es obligatoria"],
  },
  role: {
    type: String,
    required: [true, "el rol es obligatorio"],
  }
});

module.exports = model("User", userSchema);
