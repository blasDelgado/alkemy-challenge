import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../src/app.js";

//token especial caducidad 15/09/2023
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjYzMjY0NzkxLCJleHAiOjE2OTQ4MDA3OTF9.aPPKX9FheVW6uc59Lfz3EoqYHCaDN52YBbiMNMRHAuY";

//Película para test
const pelicula = {
  image_url: "www.asdpwpsadlasd.com/22",
  title: "pelicula de test",
  creation_date: "2022-12-12",
  rating: 3.8,
  genre: 3,
};

//Id que cambiara dinámicamente para poder crear editar y borrar la misma película de test
let id;

chai.use(chaiHttp);

//Peticiones GET

describe("GET /movies/", () => {
  it("Retorna todas las películas", (done) => {
    chai
      .request(app)
      .get("/movies")
      .set("token", token)
      .end((err, res) => {
        expect(res.body).to.have.a("array");
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("GET /movies/id", () => {
  it("Retorna la película detallada (id 3 Eternals)", (done) => {
    chai
      .request(app)
      .get("/movies/id=3")
      .set("token", token)
      .end((err, res) => {
        expect(res.body.pelicula).property("title").equals("Eternals");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe película con ese id", (done) => {
    chai
      .request(app)
      .get("/movies/id=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /movies/title=iron man 3", () => {
  it("Retorna la película iron man 3", (done) => {
    chai
      .request(app)
      .get("/movies/title=iron man 3")
      .set("token", token)
      .end((err, res) => {
        expect(res.body[0]).property("title").equals("Iron Man 3");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe película con ese titulo", (done) => {
    chai
      .request(app)
      .get("/movies/title=asdasdwqqsdq")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /movies/genre=3", () => {
  it("Retorna todas las peliculas por género", (done) => {
    chai
      .request(app)
      .get("/movies/genre=3")
      .set("token", token)
      .end((err, res) => {
        expect(res.body).to.have.a("array");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe ese género de peliculas", (done) => {
    chai
      .request(app)
      .get("/movies/genre=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /movies/order=DESC", () => {
  it("Retorna todas las peliculas ordenadas por fecha ", (done) => {
    chai
      .request(app)
      .get("/movies/order=DESC")
      .set("token", token)
      .end((err, res) => {
        expect(res.body).to.have.a("array");
        expect(res.body[0]).property("creation_date").equals("2022-06-07");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error parámetro inválido", (done) => {
    chai
      .request(app)
      .get("/movies/order=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /movies/order=ASC", () => {
  it("Retorna todas las peliculas ordenadas por fecha ", (done) => {
    chai
      .request(app)
      .get("/movies/order=ASC")
      .set("token", token)
      .end((err, res) => {
        expect(res.body).to.have.a("array");
        expect(res.body[0]).property("creation_date").equals("1990-04-05");
        expect(res).to.have.status(200);
        done();
      });
  });
});

//Peticiones POST

describe("POST /movies/create", () => {
  it("Crea una nueva película", (done) => {
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(pelicula)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals("Película creada correctamente");
        id = res.body.pelicula.id_movies;
        done();
      });
  });
  it("Error url de imagen enviada inválida", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.image_url = 22;
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error título enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.title = "Iron Man";
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Fecha de creación enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.creation_date = "FEcha errónea";
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Rating enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.rating = 10;
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it("Error Género enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.genre = 18;
    chai
      .request(app)
      .post("/movies/create")
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
});

//Peticiones PUT

describe("PUT /movies/update", () => {
  it("Edita una película", (done) => {
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send({ title: "otro título" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals("Película editada correctamente");
        done();
      });
  });

  it("Error url de imagen enviada inválida", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.image_url = 22;
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error título enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.title = "Iron Man";
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Fecha de creación enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.creation_date = "FEcha errónea";
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Rating enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.rating = 10;
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it("Error Género enviado inválido", (done) => {
    let peliculaErr = pelicula;
    peliculaErr.genre = 18;
    chai
      .request(app)
      .put(`/movies/update/id=${id}`)
      .set("token", token)
      .send(peliculaErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it("Error no existe una película con ese id", (done) => {
    chai
      .request(app)
      .put(`/movies/update/id=500`)
      .set("token", token)
      .send({ title: "otro" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

//Peticiones DELETE

describe("DELETE /movies/delete", () => {
  it("Elimina una película", (done) => {
    chai
      .request(app)
      .delete(`/movies/delete/id=${id}`)
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals(
          "Película eliminada correctamente"
        );
        done();
      });
  });
  it("Error no existe una película con ese id", (done) => {
    chai
      .request(app)
      .delete(`/movies/delete/id=500`)
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
