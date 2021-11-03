const { Router } = require("express");
const ProductsController = require("../controllers/ProductsController");
const router = Router();

router.get("/products", ProductsController.getProducts);
router.get("/products/:id", ProductsController.getOneProduct);
router.post("/products", ProductsController.postProduct);
router.put("/products/:id", ProductsController.putProduct);
router.delete("/products/:id", ProductsController.deleteProducts);

module.exports = router;
