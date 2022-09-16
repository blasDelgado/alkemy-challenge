import User from "./users-repository.js";
import Seguridad from "../../config/security.js";
import sgMail from "../../config/sendgrid.js";
import config from "../../config/config.js";

class UsersService {
  async loginService(username) {
    try {
      const userfind = await User.buscarPorUsername(username);
      const token = Seguridad.crearToken(userfind.id_users);
      return token;
    } catch (e) {
      console.log(e);
    }
  }

  async registerService(username, password, email) {
    try {
      let passwordEncryp = await Seguridad.encryptarPassword(password);
      let UserCreated = await User.crearUsuario(
        username,
        passwordEncryp,
        email
      );
      const token = Seguridad.crearToken(UserCreated.id_users);

      this.sendEmail(email);

      return token;
    } catch (e) {
      console.log(e);
    }
  }

  async sendEmail(email) {
    const msg = {
      to: email,
      from: config.sendgrid_email,
      subject: "Bienvenido a la api de disney",
      text: "Usted se registró correctamente en la api",
      html: "<p>Usted se registró correctamente en la api<p>",
    };
    try {
      await sgMail.send(msg);
    } catch (e) {
      console.log(e);
    }
  }
}

export default new UsersService();
