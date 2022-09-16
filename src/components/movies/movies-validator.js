import { check } from "express-validator";
import MoviesGenre from "./movies-genres-repository.js";
import { validationResult } from "express-validator";
import Movies from "./movies-repository.js";

const respuesta = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (e) {
    res.status(401);
    res.send({ errors: e.errors });
  }
};

export const ValidacionCrearPelicula = [
  check("image_url")
    .exists()
    .withMessage("Debe ingresar una url de imagen")
    .isURL()
    .isLength({ max: 255 })
    .not()
    .isEmpty()
    .withMessage("Debe ingresar una url de imagen"),
  check("title")
    .exists()
    .withMessage("Debe ingresar un título para la película")
    .isLength({ max: 45 })
    .notEmpty()
    .withMessage("Debe ingresar un título para la película")
    .custom(async (value, { req }) => {
      let pelicula;
      try {
        pelicula = await Movies.buscarPorTituloExacto(req.body.title);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (pelicula.length > 0) {
        throw new Error("Ya existe una película con ese título");
      }
      return true;
    }),
  check("creation_date")
    .exists()
    .withMessage("Debe ingresar una fecha de creación para la película")
    .isDate()
    .notEmpty()
    .withMessage("Debe ingresar una fecha de creación para la película"),
  check("rating")
    .exists()
    .withMessage("Debe ingresar una valoración de la película")
    .notEmpty()
    .withMessage("Debe ingresar una valoración de la película")
    .isFloat({ min: 0, max: 5 })
    .withMessage("La valoración de la película debe ser entre 0 y 5"),
  check("genre")
    .exists()
    .withMessage("Debe ingresar un género para la película")
    .isNumeric()
    .notEmpty()
    .withMessage("Debe ingresar un género para la película")
    .custom(async (value, { req }) => {
      let genre;
      try {
        genre = await MoviesGenre.buscarPorId(req.body.genre);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (genre == null) {
        throw new Error("No existe un género con ese id");
      }
      return true;
    }),
  (req, res, next) => {
    respuesta(req, res, next);
  },
];
export const ValidacionEditarPelicula = [
  check("image_url")
    .if(check("image_url").exists())
    .isURL()
    .isLength({ max: 255 })
    .not()
    .isEmpty()
    .withMessage("Debe ingresar una url de imagen"),
  check("title")
    .if(check("title").exists())
    .isLength({ max: 45 })
    .notEmpty()
    .withMessage("Debe ingresar un título para la película")
    .custom(async (value, { req }) => {
      let pelicula;
      try {
        pelicula = await Movies.buscarPorTituloExacto(req.body.title);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (pelicula.length > 0) {
        throw new Error("Ya existe una película con ese título");
      }
      return true;
    }),
  check("creation_date")
    .if(check("creation_date").exists())
    .isDate()
    .notEmpty()
    .withMessage("Debe ingresar una fecha de creación para la película"),
  check("rating")
    .if(check("rating").exists())
    .notEmpty()
    .withMessage("Debe ingresar una valoración de la película")
    .isFloat({ min: 0, max: 5 })
    .withMessage("La valoración de la película debe ser entre 0 y 5"),
  check("genre")
    .if(check("genre").exists())
    .isNumeric()
    .notEmpty()
    .withMessage("Debe ingresar un género para la película")
    .custom(async (value, { req }) => {
      let genre;
      try {
        genre = await MoviesGenre.buscarPorId(req.body.genre);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (genre == null) {
        throw new Error("No existe un género con ese id");
      }
      return true;
    }),
  (req, res, next) => {
    respuesta(req, res, next);
  },
];
