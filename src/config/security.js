import jwt from "jsonwebtoken";
import config from "./config.js";
import bcrypt from "bcryptjs";

class Seguridad {
  crearToken(id) {
    return jwt.sign({ id: id }, config.token_crypt, {
      expiresIn: 60 * 60 * 24,
    });
  }
  async encryptarPassword(password) {
    try {
      const salt = await bcrypt.genSalt(10);
      return bcrypt.hash(password, salt);
    } catch (e) {
      console.log(e);
    }
  }

  async compararPassword(passwordIngresado, passwordBD) {
    return bcrypt.compare(passwordIngresado, passwordBD);
  }
}

export default new Seguridad();
