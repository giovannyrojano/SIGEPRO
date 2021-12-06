const { Schema, model } = require("mongoose")

const projectSchema = Schema({
  title: {
    type: String,
    required: [true, "el titulo es obligatorio"],
    unique: true,
  },
  leaderId: {
    type: String,
    required: [true, "un proyecto siempre debe tener un lider"],
  },
  description: {
    type: String,
    required: [true, "la descripcion es obligatoria"],
  },
  startDate: {
    type: Date,
    required: [true, "la fecha de inicio es obligatoria"],
  },
  endDate: {
    type: Date,
    required: [false],
  },
  state: {
    type: String,
    required: [true, "el estado es obligatorio"],
  },
})
module.exports = model("project", projectSchema)
