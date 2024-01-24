import express from "express";
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";
import { createCategory, updateCategory } from "../controllers/categoryController.js";

const router = express.Router()

router.route('/').post(authenticate,authorizedAdmin,createCategory);
router.route('/:categoryId').put(authenticate,authorizedAdmin, updateCategory)

export default router;