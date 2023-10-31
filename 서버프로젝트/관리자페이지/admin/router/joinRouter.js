import express from "express";
import * as joinController from "../controller/joinController.js";



const router = express.Router()

router.use(express.urlencoded({ extended: true }));

router.use(express.json())

router.post("/", joinController.join);




export default router