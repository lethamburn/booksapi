const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const allowedCountries = require("../enums/allowedCountries.enum");

// Creamos el schema del usuario
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: [3, "Dame algo más de detalle, al menos 3 letras para el título."],
      maxLength: [50, "Tampoco te pases... intenta resumir un poco el título, máximo 50 letras."],
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: false,
    },
    pages: {
      type: Number,
      required: false,
      min: [1, "Entiendo que el libro tendrá al menos una página ¿No?"],
      max: [1000, "Como tenga más de 1.000 páginas nadie se lo va a leer..."],
    },
    publisher: {
      type: {
        name: {
          type: String,
          required: true,
          minLength: [3, "Dame algo más de detalle, al menos 3 letras para el nombre de la editorial."],
          maxLength: [25, "Tampoco te pases... ¿la editorial no tiene un nombre más corto? Máximo 25 letras."],
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
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book };
