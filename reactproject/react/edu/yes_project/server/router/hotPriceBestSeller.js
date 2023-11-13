import express from "express";
import * as hotController from "../controller/hotController.js";


const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get("/", hotController.getListPage);

export default router;