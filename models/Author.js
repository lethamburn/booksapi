const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const allowedCountries = require("../enums/allowedCountries.enum");

// Creamos el schema del author
const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Dame algo más de detalle, al menos 3 letras para el nombre."],
      maxLength: [25, "Tampoco te pases... intenta resumir un poco el nombre, máximo 25 letras."],
      trim: true,
    },
    country: {
      type: String,
      required: true,
      enum: allowedCountries,
      uppercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = { Author };
