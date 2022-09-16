import chai from "chai";
import chaiHttp from "chai-http";
import { expect } from "chai";
import app from "../src/app.js";

chai.use(chaiHttp);

describe("POST /auth/login", () => {
  it("Retorna un token al logearse", (done) => {
    chai
      .request(app)
      .post("/auth/login")
      .send({ username: "blas", password: "1234" })
      .end((err, res) => {
        expect(res.body.token).exist;
        expect(res).to.have.status(200);
        done();
      });
  });
});
