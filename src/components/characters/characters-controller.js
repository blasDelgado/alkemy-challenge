import Characters from "./characters-repository.js";

class CharactersController {
  async listarTodos(req, res) {
    try {
      const listado = await Characters.buscarTodos();
      res.status(200).json(listado);
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async listadoDetallado(req, res) {
    try {
      const id = req.params.id;
      const personaje = await Characters.buscarPorId(id);

      if (personaje == null) {
        res.status(404).json({
          mensaje: "No existe un personaje con ese id.",
        });
      } else {
        const listado = await Characters.buscarPorIdDetallada(id);

        res.status(200).json(listado);
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async listarPorNombre(req, res) {
    try {
      const nombre = req.params.name;
      const listado = await Characters.buscarPorNombre(nombre);
      if (listado.length > 0) {
        res.status(200).json(listado);
      } else {
        res.status(404).json({
          mensaje: "No existe un personaje con ese nombre.",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async listarPorEdad(req, res) {
    try {
      const edad = req.params.age;
      const listado = await Characters.buscarPorEdad(edad);
      if (listado.length > 0) {
        res.status(200).json(listado);
      } else {
        res.status(404).json({
          mensaje: "No existe un personaje con esa edad.",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async listarPorPeso(req, res) {
    try {
      const peso = req.params.weight;
      const listado = await Characters.buscarPorPeso(peso);
      if (listado.length > 0) {
        res.status(200).json(listado);
      } else {
        res.status(404).json({
          mensaje: "No existe un personaje con ese peso.",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }

  async listarPorPelicula(req, res) {
    try {
      const pelicula = req.params.movie;
      const listado = await Characters.buscarPorPelicula(pelicula);
      if (listado.pelicula != null) {
        res.status(200).json(listado);
      } else {
        res.status(404).json({
          mensaje: "Esa pelicula no existe.",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async crearPersonaje(req, res) {
    const { image_url, name, age, weight, history } = req.body;
    try {
      const personajeCreado = await Characters.crear({
        image_url,
        name,
        age,
        weight,
        history,
      });
      res.status(200).json({
        mensaje: "Personaje creado correctamente",
        personaje: personajeCreado,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async editarPersonaje(req, res) {
    const { image_url, name, age, weight, history } = req.body;
    const id = req.params.id;
    try {
      let personaje = await Characters.buscarPorId(id);
      if (personaje == null) {
        res.status(404).json({
          mensaje: "No existe un personaje con ese id.",
        });
      } else {
        await Characters.editarPorId(id, {
          image_url,
          name,
          age,
          weight,
          history,
        });
        personaje = await Characters.buscarPorId(id);

        res.status(200).json({
          mensaje: "Personaje editado correctamente",
          personaje: personaje,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
  async eliminarPersonaje(req, res) {
    const id = req.params.id;
    try {
      let personaje = await Characters.buscarPorId(id);
      if (personaje == null) {
        res.status(404).json({
          mensaje: "No existe un personaje con ese id.",
        });
      } else {
        await Characters.eliminarPorId(id);
        res.status(200).json({
          mensaje: "Personaje eliminado correctamente.",
          personaje: personaje,
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
    }
  }
}

export default new CharactersController();
