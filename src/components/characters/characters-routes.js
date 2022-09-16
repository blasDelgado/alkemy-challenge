import { Router } from "express";
import Controller from "./characters-controller.js";
import {
  ValidacionCrearPersonajes,
  ValidacionEditarPersonajes,
} from "./characters-validator.js";

const router = new Router();

router
  /**
   * @swagger
   * /characters:
   *  get:
   *    summary: Listar todos los personajes.
   *    tags: [Characters]
   *    parameters:
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Todos los personajes listados.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("", Controller.listarTodos)
  /**
   * @swagger
   * /characters/id={id}:
   *  get:
   *    summary: Personaje detallado.
   *    tags: [Characters]
   *    parameters:
   *       - in: path
   *         name: id
   *         schema:
   *            type: number
   *         required: true
   *         description: Id del personaje buscado.
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Vista detallada del personaje con el id dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe personaje con ese Id.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/id=:id", Controller.listadoDetallado)
  /**
   * @swagger
   * /characters/name={name}:
   *  get:
   *    summary: Personaje por nombre.
   *    tags: [Characters]
   *    parameters:
   *       - in: path
   *         name: name
   *         schema:
   *            type: string
   *         required: true
   *         description: Nombre del personaje buscado.
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Vista detallada del personaje con el nombre dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe un personaje con ese nombre.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/name=:name", Controller.listarPorNombre)
  /**
   * @swagger
   * /characters/age={age}:
   *  get:
   *    summary: Personajes por edad.
   *    tags: [Characters]
   *    parameters:
   *       - in: path
   *         name: age
   *         schema:
   *            type: number
   *         required: true
   *         description: Edad del personaje buscado.
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Todos los personajes con la edad dada.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No Existe un personaje con esa edad.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/age=:age", Controller.listarPorEdad)
  /**
   * @swagger
   * /characters/weight={weight}:
   *  get:
   *    summary: Personajes por peso.
   *    tags: [Characters]
   *    parameters:
   *       - in: path
   *         name: weight
   *         schema:
   *            type: number
   *         required: true
   *         description: Peso del personaje buscado.
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Todos los personajes con el peso dada.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe un personaje con ese peso.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/weight=:weight", Controller.listarPorPeso)
  /**
   * @swagger
   * /characters/movie={movie}:
   *  get:
   *    summary: Personajes por pelicula.
   *    tags: [Characters]
   *    parameters:
   *       - in: path
   *         name: movie
   *         schema:
   *            type: number
   *         required: true
   *         description: Id de la pelicula de la cual se buscan los personajes.
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Todos los personajes que participan en la pelicula dada.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/Characters'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existen personajes en esa pelicula.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/movie=:movie", Controller.listarPorPelicula);
/**
 * @swagger
 * /characters/create:
 *  post:
 *     summary: Crear un nuevo personaje.
 *     tags: [Characters]
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *            type: string
 *         required: true
 *         description: token de acceso.
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  $ref: '#/components/schemas/Characters'
 *     responses:
 *          200:
 *              description: Personaje creado correctamente.
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    $ref: '#/components/schemas/Characters'
 *          401:
 *               description: Acceso no autorizado.
 *          500:
 *              description: Ocurrió un error en el servidor.
 *
 *
 */

router.post("/create", ValidacionCrearPersonajes, Controller.crearPersonaje);
/**
 * @swagger
 * /characters/update/id={id}:
 *  put:
 *     summary: Editar personaje.
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: number
 *         required: true
 *         description: ID del personaje a editar.
 *       - in: header
 *         name: token
 *         schema:
 *            type: string
 *         required: true
 *         description: token de acceso.
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                    image_url:
 *                      type: string
 *                    name:
 *                      type: string
 *                    age:
 *                      type: number
 *                    weight:
 *                      type: number
 *                    history:
 *                      type: string
 *     responses:
 *          200:
 *              description: Personaje editado.
 *              content:
 *                application/json:
 *                  schema:
 *                    type: object
 *                    $ref: '#/components/schemas/Characters'
 *          404:
 *              description: No existe un personaje con ese id.
 *          401:
 *              description: Acceso no autorizado.
 *          500:
 *              description: Ocurrió un error en el servidor.
 *
 *
 */
router.put(
  "/update/id=:id",
  ValidacionEditarPersonajes,
  Controller.editarPersonaje
);
/**
 * @swagger
 * /characters/delete/id={id}:
 *  delete:
 *    summary: Eliminar personaje.
 *    tags: [Characters]
 *    parameters:
 *       - in: path
 *         name: id
 *         schema:
 *            type: number
 *         required: true
 *         description: Id del personaje a eliminar.
 *       - in: header
 *         name: token
 *         schema:
 *            type: string
 *         required: true
 *         description: token de acceso.
 *
 *
 *    responses:
 *      200:
 *          description: Personaje eliminado.
 *      401:
 *          description: Acceso no autorizado.
 *      404:
 *          description: No existe un personaje con ese id.
 *      500:
 *          description: Ocurrió un error en el servidor.
 */
router.delete("/delete/id=:id", Controller.eliminarPersonaje);

export default router;
