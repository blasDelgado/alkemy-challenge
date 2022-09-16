//DOcumentar con swagger

import { Router } from "express";
import LoginController from "./users-controller.js";
import {
  ValidacionLoginUsuarios,
  ValidacionRegisterUsuarios,
} from "./users-validator.js";

const router = Router();

/**
 * @swagger
 * /auth/login:
 *  post:
 *     summary: Login a la app
 *     tags: [User]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      username:
 *                          type: string
 *                      password:
 *                          type: string
 *                  example:
 *                    username: blas
 *                    password: "1234"
 *
 *
 *     responses:
 *          200:
 *              description: Usuario logeado, token suministrado.
 *          401:
 *              description: Username o password inválido.
 *          500:
 *              description: Ocurrió un error en el servidor.
 *
 *
 */
router.post("/login", ValidacionLoginUsuarios, LoginController.login);
/**
 * @swagger
 * /auth/register:
 *  post:
 *     summary: Crear nuevo usuario
 *     tags: [User]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/User'
 *     responses:
 *          200:
 *              description: Usuario creado, token suministrado.
 *          401:
 *              description: Datos suministrados inválidos o incompletos.
 *          500:
 *              description: Ocurrió un error en el servidor.
 *
 *
 */
router.post("/register", ValidacionRegisterUsuarios, LoginController.register);

export default router;
