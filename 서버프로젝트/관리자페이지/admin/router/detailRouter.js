import express from "express";
import * as detailController from "../controller/detailController.js";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.get("/", detailController.getDetail);

export default router 