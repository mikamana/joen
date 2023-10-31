import express from "express";
import * as realController from "../controller/realController.js";

const router = express.Router();
// database 초기화 init호출
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get('/:page',realController.getRealTimePage);

export default router;

