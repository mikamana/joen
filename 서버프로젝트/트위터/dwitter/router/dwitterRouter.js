import express from "express";
import * as dwitterController from "../controller/dwitterController.js";

// import ejs from "ejs";
// import dbConfig from "../db/database.js";
// // database 연동 파일 > 나중에 묶어서 configration 파일로 바꿔야함

// const conn = dbConfig.init();
// // database 초기화 init호출
// dbConfig.connect(conn);
// db연결 함수 호출

const router = express.Router();

// Express 애플리케이션에서 JSON 데이터를 처리하는 주요 이유는 
// 상호 운용성, 가독성, 통신 표준, 보안 및 프론트엔드 통합이다.

router.use(express.urlencoded({extended:true}))
// 문자열로된 json 객체를 인코딩 시켜줌
// 폼 데이터는 일반적으로 URL 인코딩되어 서버로 전송된다.
// URL 인코딩된 데이터를 해독하려면 Express 애플리케이션에서 미들웨어를 사용해야한다.
// extended 옵션: extended 옵션을 true로 설정하면 Express가 데이터를 파싱할 때
// 배열이나 객체를 처리할 수 있도록 한다.
// for parsing application
// submit 이벤트가 일어나면 x-www-form-urlencoded 데이터가 넘어옴

router.use(express.json()); // for parsing application/json
// Express.js 애플리케이션에서 JSON 데이터를 파싱하기 위한 미들웨어 설정
// 클라이언트가 전송한 HTTP 요청의 본문(body)에서 JSON 데이터를 추출하고 JavaScript 객체로 변환하는 역할
// 요약 :  Express 애플리케이션에서 클라이언트가 전송한 JSON 데이터를 파싱하고 사용할 수 있도록 해주는 중요한 미들웨어
router.get("/",dwitterController.getAll);
// getAll함수에 ()를 넣으면 값을 리턴 받아서 처리하는 의미
router.get("/:id", dwitterController.getDwitter);
    // 2.POST : / dwiiter - tweet create
router.post("/", dwitterController.create);
router.put("/", dwitterController.update);
router.delete("/",dwitterController.remove);

export default router;


// 1. GET :  /dwitter - ALL Dwitter List 
// 2. POST : /dwitter - tweet create
// 3. GET : /dwitter?id=자신의아이디 - My Dwitter List
//    GET : /dwitter/:id
// 4. PUT : /dwitter/:id - MY Dwitter update
// 5. Delete : /dwitter/:id - My Dwitter Delete