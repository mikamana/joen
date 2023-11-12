import express from "express";
import * as newsController from "../constroller/newsController.js";
import * as replyController from "../constroller/replyController.js";
import cors from "cors";

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())

router.get("/", newsController.getNews)
router.post("/", newsController.createNews)
router.put("/", newsController.updateNews)
router.post("/:nid", replyController.createReplys)
router.get("/:nid", replyController.getReplys)

export default router;