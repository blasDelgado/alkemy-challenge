import Characters from "./characters-model.js";
import MoviesCharacters from "../shared/movies-characters-repository.js";
import Movies from "../movies/movies-model.js";
import { Op } from "sequelize";

Characters.buscarTodos = async () => {
  return Characters.findAll({ attributes: ["image_url", "name"] });
};

Characters.buscarPorId = (id) => {
  return Characters.findOne({ where: { id_characters: id } });
};

Characters.buscarPorIdDetallada = async (id) => {
  try {
    let personaje = await Characters.buscarPorId(id);
    let peliculas = await MoviesCharacters.buscarPeliculasPorPersonaje(id);
    const respuesta = { personaje, peliculas };

    return respuesta;
  } catch (e) {
    console.log(e);
  }
};

Characters.buscarPorEdad = async (edad) => {
  return Characters.findAll({ where: { age: edad } });
};

Characters.buscarPorNombreExacto = async (nombre) => {
  return Characters.findAll({ where: { name: nombre } });
};

Characters.buscarPorNombre = async (nombre) => {
  return Characters.findAll({ where: { name: { [Op.substring]: nombre } } });
};

Characters.buscarPorPeso = async (peso) => {
  return Characters.findAll({ where: { weight: peso } });
};

Characters.buscarPorPelicula = async (movie) => {
  let pelicula = await Movies.buscarPorId(movie);
  let personaje = await MoviesCharacters.buscarPersonajesPorPelicula(movie);
  let respuesta = { pelicula, personaje };

  return respuesta;
};

Characters.crear = async (valores) => {
  try {
    return await Characters.create(valores);
  } catch (e) {
    console.log(e);
  }
};

Characters.editarPorId = async (id, valores) => {
  return Characters.update(valores, { where: { id_characters: id } });
};

Characters.eliminarPorId = async (id) => {
  try {
    await MoviesCharacters.eliminarPorPersonaje(id);
    return Characters.destroy({ where: { id_characters: id } });
  } catch (e) {
    console.log(e);
  }
};

export default Characters;
