import User from "./users-model.js";

User.buscarPorUsername = async (username) => {
  return User.findOne({ where: { username: username } });
};

User.buscarPorEmail = async (email) => {
  return User.findOne({ where: { email: email } });
};

User.buscarPorId = async (id) => {
  return User.findOne({ where: { id_users: id } });
};

User.crearUsuario = async (username, password, email) => {
  return User.create({
    username,
    password,
    email,
  });
};

export default User;
