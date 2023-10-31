import express from "express";
import * as newsController from "../controller/newsController.js";

const router = express.Router();

router.use(express.urlencoded({extended:true}));
//한글 인코딩 변환
router.use(express.json());
// 바디로 넘어오는 요소 json 객체로 변환
//댓글 등록+

router.get("/:nid", newsController.replyGetAll);
router.post("/", newsController.replyCreate);
router.delete("/",newsController.replyRemove);

export default router;