const { Schema, model } = require("mongoose");

const projectSchema = Schema({
    title: {
    type: String,
    required: [true, "el titulo es obligatorio"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "la descripcion es obligatoria"],
  },
  start_Date: {
    type: Date,
    required: [true, "la fecha de inicio es obligatoria"],
  },
  end_Date: {
    type: Date,
    required: [false],
  },
  state: {
    type: String,
    required: [true, "el estado es obligatorio"],
  }
});
module.exports = model("project", projectSchema);
