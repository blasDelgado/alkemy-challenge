import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../src/app.js";

chai.use(chaiHttp);

//token especial caducidad 15/09/2023
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjYzMjY0NzkxLCJleHAiOjE2OTQ4MDA3OTF9.aPPKX9FheVW6uc59Lfz3EoqYHCaDN52YBbiMNMRHAuY";

//Personaje para test
const personaje = {
  image_url: "https://wwww.imagenesexample.com",
  name: "Mickey Mouse",
  age: 92,
  weight: 12,
  history:
    "In 1925, Hugh Harman drew some sketches of mice around a photograph of Walt Disney. These inspired Ub Iwerks to create a new mouse character for Disney.",
};

//Id que cambiara dinámicamente para poder crear editar y borrar el mismo personaje de test
let id;

//Peticiones GET
describe("GET /characters/", () => {
  it("Retorna todos los personajes", (done) => {
    chai
      .request(app)
      .get("/characters")
      .set("token", token)
      .end((err, res) => {
        expect(res.body).to.have.a("array");
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe("GET /characters/id=2", () => {
  it("Retorna el personaje detallado (Tony Stark)", (done) => {
    chai
      .request(app)
      .get("/characters/id=2")
      .set("token", token)
      .end((err, res) => {
        expect(res.body)
          .property("personaje")
          .property("name")
          .to.be.equals("Tony Stark");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe  personaje con ese id", (done) => {
    chai
      .request(app)
      .get("/characters/id=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /characters/name=Thor", () => {
  it("Retorna el personaje Thor", (done) => {
    chai
      .request(app)
      .get("/characters/name=thor")
      .set("token", token)
      .end((err, res) => {
        expect(res.body[0]).property("name").to.be.equals("Thor Odinson");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe un personaje con ese nombre", (done) => {
    chai
      .request(app)
      .get("/characters/name=blasdelgado")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /characters/age=24", () => {
  it("Retorna el personaje Thor (24años)", (done) => {
    chai
      .request(app)
      .get("/characters/age=24")
      .set("token", token)
      .end((err, res) => {
        expect(res.body[0]).property("name").to.be.equals("Thor Odinson");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe un personaje con esa edad", (done) => {
    chai
      .request(app)
      .get("/characters/age=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /characters/weight=98", () => {
  it("Retorna el personaje Thor (98kg)", (done) => {
    chai
      .request(app)
      .get("/characters/weight=98")
      .set("token", token)
      .end((err, res) => {
        expect(res.body[0]).property("name").to.be.equals("Thor Odinson");
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe un personaje con ese peso", (done) => {
    chai
      .request(app)
      .get("/characters/weight=400")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe("GET /characters/movie=78", () => {
  it("Retorna los personajes de la pelicula 78 (id 20 ,21)", (done) => {
    chai
      .request(app)
      .get("/characters/movie=78")
      .set("token", token)
      .end((err, res) => {
        expect(res.body.personaje[0].character)
          .property("id_characters")
          .to.be.equals(20);
        expect(res.body.personaje[1].character)
          .property("id_characters")
          .to.be.equals(21);
        expect(res).to.have.status(200);
        done();
      });
  });
  it("Error no existe un apelicula con ese ID", (done) => {
    chai
      .request(app)
      .get("/characters/movie=322")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

//Peticiones POST

describe("POST /characters/create", () => {
  it("Crea un nuevo personaje", (done) => {
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send(personaje)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals("Personaje creado correctamente");
        id = res.body.personaje.id_characters;
        done();
      });
  });
  it("Error url de imagen enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.image_url = 22;
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error nombre enviado inválido", (done) => {
    let personajeErr = personaje;
    personajeErr.name = "Tony Stark";
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error edad enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.age = "Edad errada";
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error peso enviado inválido", (done) => {
    let personajeErr = personaje;
    personajeErr.weight = "Peso errado";
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Historia enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.history = "";
    chai
      .request(app)
      .post("/characters/create")
      .set("token", token)
      .send()
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
});

//Peticiones PUT

describe("PUT /characters/update", () => {
  it("Edita un perosnaje", (done) => {
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send({ title: "Otro título" })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals(
          "Personaje editado correctamente"
        );
        done();
      });
  });

  it("Error url de imagen enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.image_url = 22;
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error nombre enviado inválido", (done) => {
    let personajeErr = personaje;
    personajeErr.name = "Tony Stark";
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error edad enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.age = "Edad errada";
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error peso enviado inválido", (done) => {
    let personajeErr = personaje;
    personajeErr.weight = "Peso errado";
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });
  it("Error Historia enviada inválida", (done) => {
    let personajeErr = personaje;
    personajeErr.history = "";
    chai
      .request(app)
      .put(`/characters/update/id=${id}`)
      .set("token", token)
      .send(personajeErr)
      .end((err, res) => {
        expect(res).to.have.status(401);
        done();
      });
  });

  it("Error no existe un personaje con ese id", (done) => {
    chai
      .request(app)
      .put("/characters/update/id=400")
      .set("token", token)
      .send({ title: "Otro título" })
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

//Peticiones DELETE

describe("DELETE /characters/delete", () => {
  it("Elimina un perosnaje", (done) => {
    chai
      .request(app)
      .delete(`/characters/delete/id=${id}`)
      .set("token", token)
      .send(personaje)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.mensaje).to.be.equals(
          "Personaje eliminado correctamente."
        );
        done();
      });
  });
  it("Error no existe un personaje con ese id", (done) => {
    chai
      .request(app)
      .delete("/characters/delete/id=400")
      .set("token", token)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
