const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const Product = require("../models/Product");

jest.setTimeout(20000);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,
  });
}, 20000);

afterEach(async () => {
  await Product.deleteMany({});
}, 20000);

afterAll(async () => {
  await mongoose.connection.close();
}, 20000);

describe("Product CRUD API", () => {

  // CREATE
  test("CREATE product", async () => {
    const response = await request(app)
      .post("/api/products")
      .send({
        pid: "P001",
        pname: "Laptop",
        price: 1500,
        quantity: 10
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.pid).toBe("P001");
    expect(response.body.pname).toBe("Laptop");
    expect(response.body.price).toBe(1500);
    expect(response.body.quantity).toBe(10);
  });


  // READ
  test("READ product", async () => {
    await Product.create({
      pid: "P002",
      pname: "Mouse",
      price: 20,
      quantity: 5
    });

    const response = await request(app)
      .get("/api/products/P002");

    expect(response.statusCode).toBe(200);
    expect(response.body.pid).toBe("P002");
    expect(response.body.pname).toBe("Mouse");
    expect(response.body.price).toBe(20);
    expect(response.body.quantity).toBe(5);
  });


  // UPDATE
  test("UPDATE product", async () => {
    await Product.create({
      pid: "P003",
      pname: "Keyboard",
      price: 30,
      quantity: 5
    });

    const response = await request(app)
      .put("/api/products/P003")
      .send({
        pname: "Gaming Keyboard",
        price: 40,
        quantity: 3
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.pid).toBe("P003");
    expect(response.body.pname).toBe("Gaming Keyboard");
    expect(response.body.price).toBe(40);
    expect(response.body.quantity).toBe(3);
  });


  // DELETE
  test("DELETE product", async () => {
    await Product.create({
      pid: "P004",
      pname: "Monitor",
      price: 200,
      quantity: 3
    });

    const response = await request(app)
      .delete("/api/products/P004");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Product deleted");

    const deletedProduct = await Product.findOne({
      pid: "P004"
    });

    expect(deletedProduct).toBeNull();
  });

});