import express from "express";
import * as steadyController from "../controller/steadyController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get("/", steadyController.getListPage);

export default router;
