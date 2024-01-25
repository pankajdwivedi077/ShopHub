import express from "express";
import formidable from 'express-formidable'
import { authenticate, authorizedAdmin } from "../middleware/authMiddleware.js";
import checkId from "../middleware/checkId.js";
import { addProduct } from "../controllers/productController.js";

const router = express.Router()

router.route('/').post(authenticate,authorizedAdmin, formidable(), addProduct)



export default router;