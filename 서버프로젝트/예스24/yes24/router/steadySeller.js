import express from "express";
import * as steadyController from "../controller/steadyController.js";

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.get('/:page', steadyController.getSteadyPage);


export default router;
