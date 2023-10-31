import express from "express";
import * as salesController from "../controller/salesController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get("/", salesController.getSales);



export default router 