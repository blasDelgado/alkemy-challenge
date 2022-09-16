import Movies from "../movies/movies-repository.js";
import Characters from "../characters/characters-repository.js";
import MoviesCharacters from "./movies-characters-model.js";

MoviesCharacters.buscarPersonajesPorPelicula = async (id) => {
  return MoviesCharacters.findAll({
    include: [{ model: Characters, attributes: ["id_characters", "name"] }],
    attributes: [],
    where: { movies: id },
  });
};

MoviesCharacters.eliminarPorPelicula = async (id) => {
  return MoviesCharacters.destroy({ where: { movies: id } });
};

MoviesCharacters.buscarPeliculasPorPersonaje = async (id) => {
  return MoviesCharacters.findAll({
    include: [{ model: Movies, attributes: ["title"] }],
    attributes: [],
    where: { characters: id },
  });
};

MoviesCharacters.eliminarPorPersonaje = async (id) => {
  return MoviesCharacters.destroy({ where: { characters: id } });
};

export default MoviesCharacters;
