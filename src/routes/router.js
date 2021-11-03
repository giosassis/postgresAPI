const express = require("express");
const products = require("./ProductsRoute");
const app = express();

module.exports = (app) => {
  app.use(express.json(), products);
};
