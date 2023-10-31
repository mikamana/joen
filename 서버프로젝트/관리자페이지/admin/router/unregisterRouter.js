import express from "express";
import * as unregisterController from "../controller/unregisterController.js";


const router = express.Router()

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post("/", unregisterController.unregister);

export default router;