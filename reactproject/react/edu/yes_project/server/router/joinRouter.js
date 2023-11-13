import express from "express";
import * as joinController from "../controller/joinController.js";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.post("/", joinController.joinPage)

// 저장되는 비밀번호는 암호화 되어야함

export default router