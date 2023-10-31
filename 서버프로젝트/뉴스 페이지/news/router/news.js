import express from "express";
import * as newsController from "../controller/newsController.js";

const router = express.Router();
router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.get("/",newsController.getAll);
router.post("/", newsController.create);
router.get("/:nid",newsController.getNews);
router.delete("/",newsController.remove);

export default router;



