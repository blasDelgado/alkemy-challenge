import Movies from "./movies-model.js";
import MoviesCharacters from "../shared/movies-characters-repository.js";
import { Op } from "sequelize";

Movies.buscarTodos = async () => {
  return Movies.findAll({ attributes: ["title", "creation_date"] });
};

Movies.buscarPorId = async (id) => {
  return Movies.findOne({ where: { id_movies: id } });
};

Movies.buscarPorIdDetallada = async (id) => {
  try {
    const pelicula = await Movies.buscarPorId(id);
    const personajes = await MoviesCharacters.buscarPersonajesPorPelicula(id);

    return { pelicula, personajes };
  } catch (e) {
    console.log(e);
  }
};

Movies.buscarPorTitulo = async (titulo) => {
  return Movies.findAll({ where: { title: { [Op.substring]: titulo } } });
};

Movies.buscarPorTituloExacto = async (titulo) => {
  return Movies.findAll({ where: { title: titulo } });
};

Movies.buscarPorGenero = async (genero) => {
  return Movies.findAll({ where: { genre: genero } });
};

Movies.ordenarPorFecha = async (orden) => {
  return Movies.findAll({
    order: [["creation_date", orden]],
  });
};

Movies.crear = async (valores) => {
  return Movies.create(valores);
};

Movies.editarPorId = async (id, valores) => {
  return Movies.update(valores, { where: { id_movies: id } });
};

Movies.eliminarPorId = async (id) => {
  try {
    await MoviesCharacters.eliminarPorPelicula(id);
    return Movies.destroy({ where: { id_movies: id } });
  } catch (e) {
    console.log(e);
  }
};

export default Movies;
