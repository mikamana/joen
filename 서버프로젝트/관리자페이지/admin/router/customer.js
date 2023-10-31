import express from "express";
import * as adminController from "../controller/adminController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get("/", adminController.getAll);


export default router;

