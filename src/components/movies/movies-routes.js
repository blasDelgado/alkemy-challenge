import { Router } from "express";
import Controller from "./movies-controller.js";
import {
  ValidacionCrearPelicula,
  ValidacionEditarPelicula,
} from "./movies-validator.js";
const router = Router();

router
  /**
   * @swagger
   * /movies:
   *  get:
   *   summary: Listar todas las películas.
   *   tags: [Movies]
   *   parameters:
   *       - in: header
   *         name: token
   *         schema:
   *            type: string
   *         required: true
   *         description: token de acceso.
   *   responses:
   *     200:
   *       description: Todos las películas listadas.
   *       content:
   *         application/json:
   *           schema:
   *             type: array
   *             items:
   *               $ref: '#/components/schemas/Movies'
   *     401:
   *          description: Acceso no autorizado.
   *     500:
   *         description: Ocurrió un error en el servidor.
   *
   *
   */
  .get("", Controller.listarTodos)
  /**
   * @swagger
   * /movies/id={id}:
   *  get:
   *    summary: Películas Detalladas.
   *    tags: [Movies]
   *    parameters:
   *      - in: path
   *        name : id
   *        schema:
   *          type: number
   *        required: true
   *        description: Id de la película buscada.
   *      - in: header
   *        name: token
   *        schema:
   *           type: string
   *        required: true
   *        description: token de acceso.
   *
   *    responses:
   *      200:
   *          description: Vista detallada de la película con el id dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                $ref: '#/components/schemas/Movies'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe una película con ese id.
   *      500:
   *          description: Ocurrió un error en el servidor.
   *
   */
  .get("/id=:id", Controller.listadoDetallado)
  /**
   * @swagger
   * /movies/title={title}:
   *   get:
   *    summary: Películas por titulo.
   *    tags: [Movies]
   *    parameters:
   *      - in: path
   *        name : title
   *        schema:
   *          type: string
   *        required: true
   *        description: Título de la película buscada.
   *      - in: header
   *        name: token
   *        schema:
   *          type: string
   *        required: true
   *        description: token de acceso.
   *    responses:
   *      200:
   *          description: Película con el título dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: object
   *                $ref: '#/components/schemas/Movies'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe una película con ese título .
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/title=:title", Controller.listarPorTitulo)
  /**
   * @swagger
   * /movies/genre={genre}:
   *   get:
   *    summary: Películas por género.
   *    tags: [Movies]
   *    parameters:
   *      - in: path
   *        name : genre
   *        schema:
   *          type: number
   *        required: true
   *        description: Id del género de la película buscada.
   *      - in: header
   *        name: token
   *        schema:
   *          type: string
   *        required: true
   *        description: token de acceso.
   *    responses:
   *      200:
   *          description: Películas del genero dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items :
   *                  $ref: '#/components/schemas/Movies'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: Id del género incorrecto.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/genre=:genre", Controller.listarPorGenero)
  /**
   * @swagger
   * /movies/order={order}:
   *   get:
   *    summary: Películas ordenadas por fecha de creación.
   *    tags: [Movies]
   *    parameters:
   *      - in: path
   *        name : order
   *        schema:
   *          type: string
   *        example: ASC ó DESC
   *        required: true
   *        description: Forma en la que se van a ordenar las películas.
   *      - in: header
   *        name: token
   *        schema:
   *          type: string
   *        required: true
   *        description: token de acceso.
   *    responses:
   *      200:
   *          description: Películas con el orden dado.
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items :
   *                  $ref: '#/components/schemas/Movies'
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: Parametros de busqueda incorrectos.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .get("/order=:order", Controller.listarPorFechaDeCreacion)
  /**
   * @swagger
   * /movies/create:
   *   post:
   *     summary: Crear una nueva película.
   *     tags: [Movies]
   *     parameters:
   *      - in: header
   *        name: token
   *        schema:
   *          type: string
   *        required: true
   *        description: token de acceso.
   *     requestBody:
   *      required: true
   *      content:
   *          application/json:
   *              schema:
   *                  type: object
   *                  $ref: '#/components/schemas/Movies'
   *     responses:
   *          200:
   *              description: Película creada correctamente.
   *              content:
   *                application/json:
   *                  schema:
   *                    type: object
   *                    $ref: '#/components/schemas/Movies'
   *          401:
   *               description: Acceso no autorizado.
   *          404:
   *              description: No existe un género con ese id.
   *          500:
   *              description: Ocurrió un error en el servidor.
   *
   *
   */
  .post("/create", ValidacionCrearPelicula, Controller.crearPelicula)
  /**
   * @swagger
   * /movies/update/id={id}:
   *  put:
   *     summary: Editar película.
   *     tags: [Movies]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *            type: number
   *         required: true
   *         description: ID de la película a editar.
   *       - in: header
   *         name: token
   *         schema:
   *           type: string
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
   *                    title:
   *                      type: string
   *                    creation_date:
   *                      type: string
   *                    rating:
   *                       type: integer
   *                       minimum: 1
   *                       maximum: 5
   *                    genre:
   *                      type: number
   *     responses:
   *          200:
   *              description: Película editada.
   *              content:
   *                application/json:
   *                  schema:
   *                    type: object
   *                    $ref: '#/components/schemas/Movies'
   *          401:
   *              description: Acceso no autorizado.
   *          404:
   *              description: No existe una película con ese id.
   *          500:
   *              description: Ocurrió un error en el servidor.
   *
   *
   */
  .put("/update/id=:id", ValidacionEditarPelicula, Controller.editarPelicula)
  /**
   * @swagger
   * /movies/delete/id={id}:
   *  delete:
   *    summary: Eliminar pelicula.
   *    tags: [Movies]
   *    parameters:
   *       - in: path
   *         name: id
   *         schema:
   *            type: number
   *         required: true
   *         description: Id de la película a eliminar.
   *       - in: header
   *         name: token
   *         schema:
   *           type: string
   *         required: true
   *         description: token de acceso.
   *    responses:
   *      200:
   *          description: Pelicula eliminada.
   *      401:
   *          description: Acceso no autorizado.
   *      404:
   *          description: No existe una película con ese id.
   *      500:
   *          description: Ocurrió un error en el servidor.
   */
  .delete("/delete/id=:id", Controller.eliminarPelicula);
export default router;
