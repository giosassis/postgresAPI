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

  static async getOneProduct(req, res) {
    const { id } = req.params;
    try {
      const oneProduct = await database.Products.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(oneProduct);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async postProduct(req, res) {
    const newProduct = req.body;
    try {
      const postCreated = await database.Products.create(newProduct);
      return res.status(200).json(postCreated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async putProduct(req, res) {
    const { id } = req.params;
    const updateProduct = req.body;
    try {
      await database.Products.update(updateProduct, {
        where: { id: Number(id) },
      });
      const productUpdated = await database.Products.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(productUpdated);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async deleteProducts(req, res) {
    const { id } = req.params;
    try {
      await database.Products.destroy({where: { id: Number(id) }});
      return res.status(200).json({message: `Product ${id} was successfully deleted`});
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
}

module.exports = ProductsController;
