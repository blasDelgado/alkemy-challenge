import User from "./users-repository.js";
import UsersService from "./users-service.js";

class LoginController {
  async login(req, res) {
    const { username } = req.body;
    try {
      const token = await UsersService.loginService(username);
      res.status(200).json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async register(req, res) {
    const { username, password, email } = req.body;
    try {
      const token = await UsersService.registerService(
        username,
        password,
        email
      );
      res.status(200).json({ mensaje: "Usuario creado con éxito", token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
}

export default new LoginController();
