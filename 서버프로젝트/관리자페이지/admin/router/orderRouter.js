import express from "express";
import * as orderController from "../controller/orderController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get("/", orderController.getOrder);
router.get("/ohYear", orderController.getYear);
router.get("/ohPrd", orderController.getPrd);
router.get("/ohCategory", orderController.getCategory);
router.get("/ohCustomer", orderController.getCustomer);

export default router 