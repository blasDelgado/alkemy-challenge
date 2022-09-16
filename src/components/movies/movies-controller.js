import Movies from "./movies-repository.js";

class MoviesController {
  async listarTodos(req, res) {
    try {
      const listado = await Movies.buscarTodos();
      res.status(200).json(listado);
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async listadoDetallado(req, res) {
    try {
      const id = req.params.id;
      const pelicula = await Movies.buscarPorId(id);
      if (pelicula == null) {
        res.status(404).json({ mensaje: "No existe una película con ese id" });
      } else {
        const listado = await Movies.buscarPorIdDetallada(id);
        res.status(200).json(listado);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async listarPorTitulo(req, res) {
    try {
      const titulo = req.params.title;
      const listado = await Movies.buscarPorTitulo(titulo);
      if (listado.length > 0) {
        res.status(200).json(listado);
      } else {
        res
          .status(404)
          .json({ mensaje: "No existe una película con ese título" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async listarPorGenero(req, res) {
    try {
      const genero = req.params.genre;
      const listado = await Movies.buscarPorGenero(genero);
      if (listado.length > 0) {
        res.status(200).json(listado);
      } else {
        res.status(404).json({
          mensaje: "No existe un género con ese Id.",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async listarPorFechaDeCreacion(req, res) {
    try {
      const orden = req.params.order.toUpperCase();
      if (orden == "ASC" || orden == "DESC") {
        const listado = await Movies.ordenarPorFecha(orden);
        res.status(200).json(listado);
      } else {
        res.status(404).json({ mensaje: "Párametros de búsqueda incorrectos" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async crearPelicula(req, res) {
    const { image_url, title, creation_date, rating, genre } = req.body;
    try {
      const peliculaCreada = await Movies.crear({
        image_url,
        title,
        creation_date,
        rating,
        genre,
      });
      res.status(200).json({
        mensaje: "Película creada correctamente",
        pelicula: peliculaCreada,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async editarPelicula(req, res) {
    const { image_url, title, creation_date, rating, genre } = req.body;
    const id = req.params.id;
    try {
      let pelicula = await Movies.buscarPorId(id);
      if (pelicula == null) {
        res.status(404).json({
          mensaje: "No existe una película con ese id.",
        });
      } else {
        await Movies.editarPorId(id, {
          image_url,
          title,
          creation_date,
          rating,
          genre,
        });
        pelicula = await Movies.buscarPorId(id);
        res.status(200).json({
          mensaje: "Película editada correctamente",
          pelicula: pelicula,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async eliminarPelicula(req, res) {
    const id = req.params.id;
    try {
      let pelicula = await Movies.buscarPorId(id);
      if (pelicula == null) {
        res.status(404).json({
          mensaje: "No existe una película con ese id.",
        });
      } else {
        await Movies.eliminarPorId(id);
        res.status(200).json({
          mensaje: "Película eliminada correctamente",
          pelicula: pelicula,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
}

export default new MoviesController();
