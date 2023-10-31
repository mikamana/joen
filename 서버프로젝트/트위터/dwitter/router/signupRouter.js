import express from "express";
import * as signupController from "../controller/signupController.js";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true})) // for parsing application
// submit 이벤트가 일어나면 x-www-form-urlencoded 데이터가 넘어옴

router.post("/",signupController.signupCreate);

export default router;