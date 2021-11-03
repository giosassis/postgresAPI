const database = require("../models");

class ProductsController {
  static async getProducts(req, res) {
    try {
      const allProducts = await database.Products.findAll();
      return res.status(200).json(allProducts);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ProductsController;
