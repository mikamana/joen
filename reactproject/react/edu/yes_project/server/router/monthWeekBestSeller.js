import express from "express";
import * as monthController from "../controller/monthController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get('/',monthController.getListPage);

export default router;