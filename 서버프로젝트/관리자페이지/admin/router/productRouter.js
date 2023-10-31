import express from "express";
import * as productController from "../controller/productController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }))

router.post("/product", productController.createProduct)
router.get("/", productController.getProduct)
router.post("/productUpdate", productController.updateProduct)
router.post("/productDelete", productController.deleteProduct)

export default router