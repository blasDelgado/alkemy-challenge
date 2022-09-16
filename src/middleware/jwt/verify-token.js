import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import User from "../../components/users/users-repository.js";

export default async function verificarToken(req, res, next) {
  let token = req.headers.token;

  if (!token) {
    res.status(401).json({
      mensaje: "Acceso no autorizado , necesita un token para ingresar",
    });
  } else {
    try {
      const userId = jwt.verify(token, config.token_crypt).id;

      const user = await User.buscarPorId(userId);

      if (!user) {
        res
          .status(401)
          .json({ mensaje: "Acceso no autorizado , token inválido" });
      } else {
        next();
      }
    } catch (e) {
      console.log(e);
      res
        .status(401)
        .json({ mensaje: "No se pudo validar el token ,token erróneo" });
    }
  }
}
