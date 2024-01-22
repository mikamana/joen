import express from "express";
import * as controller from "../controller/todoController.js";

const router = express.Router();

router.get("/", controller.getList);

export default router;