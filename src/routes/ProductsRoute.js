const { Router } = require('express')
const ProductsController = require("../controllers/ProductsController");
const router = Router();

router.get("/products", ProductsController.getProducts)

module.exports = router;