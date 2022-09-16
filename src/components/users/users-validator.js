import { check } from "express-validator";
import User from "./users-repository.js";
import Seguridad from "../../config/security.js";
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

export const ValidacionLoginUsuarios = [
  check("username")
    .exists()
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const userfind = await User.buscarPorUsername(value);
      if (!userfind) {
        throw new Error("El usuario ingresado no existe");
      }
      return true;
    }),
  check("password")
    .exists()
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const userfind = await await User.buscarPorUsername(req.body.username);
      if (!userfind) {
        throw new Error("Contraseña incorrecta");
      }
      if (await Seguridad.compararPassword(value, userfind.password)) {
        return true;
      }
      throw new Error("Contraseña incorrecta");
    }),

  (req, res, next) => {
    respuesta(req, res, next);
  },
];

export const ValidacionRegisterUsuarios = [
  check("username")
    .exists()
    .isLength({ max: 120, min: 5 })
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const userfind = await User.buscarPorUsername(value);
      if (userfind) {
        throw new Error("El usuario ingresado ya existe");
      }
      return true;
    }),
  check("email")
    .exists()
    .isEmail()
    .isLength({ max: 255, min: 10 })
    .not()
    .isEmpty()
    .custom(async (value, { req }) => {
      const userfind = await User.buscarPorEmail(value);
      if (userfind) {
        throw new Error("El email ingresado ya existe");
      }
      return true;
    }),
  check("password").exists().isLength({ max: 120, min: 5 }).not().isEmpty(),

  (req, res, next) => {
    respuesta(req, res, next);
  },
];
