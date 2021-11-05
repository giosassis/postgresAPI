const app = require("../app");
const request = require("supertest");

describe("GET /products", () => {
  it("return a json with message and status 200", (done) => {
    request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /products", function () {
  it("responds with json", function (done) {
    request(app)
      .post("/products")
      .send({ name: "Avengers T-Shirt" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        return done();
      });
  });
});

it("should update a products", async () => {
  const res = await request(app).put("/products").send({
    id: 25,
    name: "Avengers T-Shirt",
    description: "Avengers T-Shirt",
    price: 7,
  });
});
