import express from "express";
import * as dayController from "../controller/dayController.js";

const router = express.Router();
// database 초기화 init호출
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", dayController.getListPage);

export default router;
