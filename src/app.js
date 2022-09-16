import express from "express";
//Middleweares
import morgan from "morgan";
//Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerConfig from "./config/swagger.js";
//Rutas
import rutasAuth from "./components/users/users-routes.js";
import rutasCharacters from "./components/characters/characters-routes.js";
import rutasMovies from "./components/movies/movies-routes.js";
//Seguridad
import VerificarToken from "./middleware/jwt/verify-token.js";

const app = express();

//Configuraciones
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleweares
app.use(morgan("dev"));

//Swagger
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerConfig))
);

//Rutas
app.use("/auth", rutasAuth);
app.use("/characters", VerificarToken, rutasCharacters);
app.use("/movies", VerificarToken, rutasMovies);

export default app;
