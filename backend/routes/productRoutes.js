import express from "express";
import formidable from "express-formidable";
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";
import checkId from "../middleware/checkId.js";
import {
  addProduct,
  updateProductDetails,
  removeProduct,
  fetchProducts,
  fetchProductById,
  fetchAllProducts,
  addProductReview
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(fetchProducts).post(authenticate, authorizedAdmin, formidable(), addProduct);
router.route('/allProducts').get(fetchAllProducts);
router.route('/:id/reviews').post(authenticate, authorizedAdmin, addProductReview)
router
  .route("/:id")
  .get(fetchProductById)
  .put(authenticate, authorizedAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizedAdmin, removeProduct)

export default router;
