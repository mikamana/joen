import express from "express";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as joinController from "../controller/joinController.js";

const router = express.Router();
router.use(express.urlencoded({extended:true})) // for parsing application
// submit 이벤트가 일어나면 x-www-form-urlencoded 데이터가 넘어옴

router.use(express.json()); // for parsing application/json
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDirectoryPath = path.dirname(__dirname);
// module 방식으로 현재 경로 가져오는 방법
router.use(express.static(__dirname));
const pathMember = path.join(parentDirectoryPath + "/template");

// router.get("/", (req, res, next) => {
//     console.log(parentDirectoryPath);
//     res.sendFile(pathMember + "/join.html");
// });
//form을 get방식으로 하게되면 개인정보가 링크 쿼리에 담겨서 사용권장 X

router.post("/", joinController.createJoin);









export default router;