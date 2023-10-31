import express from "express";
import * as yesController from "../controller/yesController.js";

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get("/", yesController.getAll);
router.get("/:page", yesController.getPage);
router.post("/", yesController.createPage);

export default router