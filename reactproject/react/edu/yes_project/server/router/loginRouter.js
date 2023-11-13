import express from "express";
import * as loginController from "../controller/loginController.js";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.post("/", loginController.loginPage);


export default router;