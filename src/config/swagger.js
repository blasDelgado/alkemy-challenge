import path from "path";
import config from "./config.js";
import { fileURLToPath } from "url";

const port = config.port;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api Disney Alkemy",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: [`${path.join(__dirname, "../components/*/*.js")}`], //posible error verificar
};

export default swaggerSpec;
