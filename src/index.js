import app from "./app.js";
import config from "./config/config.js";
import database from "./database/database.js";

const port = config.port || 8080;

app.listen(
  port,
  console.log(`Conexión al servidor establecida en el puerto: ${port}`)
);

database
  .authenticate()
  .then(() => console.log("Conexión a la base de datos establecida"))
  .catch((e) => console.log(e, "Error en la conexión a la base de datos"));
