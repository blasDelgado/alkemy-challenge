import MoviesGenre from "./movies-genres-model.js";

MoviesGenre.buscarPorId = async (id) => {
  return MoviesGenre.findOne({ where: { id_genre: id } });
};

export default MoviesGenre;
