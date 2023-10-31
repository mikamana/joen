import express from "express";
import * as monthController from "../controller/monthController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get('/:page', monthController.getMonthPage);

export default router;