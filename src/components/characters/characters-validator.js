import { check } from "express-validator";
import Characters from "./characters-repository.js";
import { validationResult } from "express-validator";

const respuesta = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (e) {
    res.status(401);
    res.send({ errors: e.errors });
  }
};

export const ValidacionCrearPersonajes = [
  check("image_url")
    .exists()
    .withMessage("debe ingresar una url de imagen")
    .isURL()
    .isLength({ max: 255 })
    .not()
    .isEmpty()
    .withMessage("debe ingresar una url de imagen"),
  check("name")
    .exists()
    .withMessage("debe ingresar un nombre para el personaje")
    .isLength({ max: 45 })
    .not()
    .isEmpty()
    .withMessage("debe ingresar un nombre para el personaje")
    .custom(async (value, { req }) => {
      let namefind;
      try {
        namefind = await Characters.buscarPorNombreExacto(req.body.name);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (namefind.length > 0) {
        throw new Error("Ya existe un personaje con ese nombre");
      }
      return true;
    }),
  check("age")
    .exists()
    .withMessage("debe ingresar una edad")
    .isNumeric()
    .withMessage("debe ingresar una edad en formato númerico")
    .not()
    .isEmpty()
    .withMessage("debe ingresar una edad"),
  check("weight")
    .exists()
    .withMessage("debe ingresar un peso")
    .isNumeric()
    .withMessage("debe ingresar un peso en formato númerico")
    .not()
    .isEmpty()
    .withMessage("debe ingresar un peso"),
  check("history")
    .exists()
    .withMessage("debe ingresar una historia")
    .isString()
    .isLength({ max: 16777215 })
    .withMessage("la historia no debe ser mayor de : 16777215 caracteres")
    .not()
    .isEmpty()
    .withMessage("debe ingresar una historia"),
  (req, res, next) => {
    respuesta(req, res, next);
  },
];

export const ValidacionEditarPersonajes = [
  check("image_url")
    .if(check("image_url").exists())
    .exists()
    .isURL()
    .isLength({ max: 255 })
    .not()
    .isEmpty(),
  check("name")
    .if(check("name").exists())
    .exists()
    .isLength({ max: 45 })
    .not()
    .isEmpty()
    .withMessage("debe ingresar una url de imagen")
    .custom(async (value, { req }) => {
      let namefind;
      try {
        namefind = await Characters.buscarPorNombre(req.body.name);
      } catch (e) {
        console.log(e);
        throw new Error("Error en el servidor");
      }
      if (namefind.length > 0) {
        throw new Error("Ya existe un personaje con ese nombre");
      }
      return true;
    }),
  check("age")
    .if(check("age").exists())
    .exists()
    .isNumeric()
    .withMessage("debe ingresar una edad en formato númerico")
    .not()
    .isEmpty()
    .withMessage("debe ingresar una edad"),
  check("weight")
    .if(check("weight").exists())
    .exists()
    .isNumeric()
    .withMessage("debe ingresar un peso en formato númerico")
    .not()
    .isEmpty()
    .withMessage("debe ingresar un peso"),
  check("history")
    .if(check("history").exists())
    .exists()
    .isString()
    .isLength({ max: 16777215 })
    .withMessage("la historia no debe ser mayor de : 16777215 caracteres")
    .not()
    .isEmpty()
    .withMessage("debe ingresar una historia"),
  (req, res, next) => {
    respuesta(req, res, next);
  },
];
