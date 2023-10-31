import express from "express";
import bestSellerRouter from "./router/bestSeller.js";
import realTimeBestSeller from "./router/realTimeBestSeller.js";
import dayBestSeller from "./router/dayBestSeller.js";
import monthWeekBestSeller from "./router/monthWeekBestSeller.js";
import hotPriceBestSeller from "./router/hotPriceBestSeller.js";
import steadySeller from "./router/steadySeller.js";
import joinRouter from "./router/joinRouter.js";
import loginRouter from "./router/loginRouter.js";



const app = express();

// app.use("/", 로그인폼);  > 로그인완료후페이지, 회원가입완료후페이지 만들고 이동하게끔 진행
// 회원가입 폼 > 회원가입완료 페이지 생성후 이동
// 로그인 폼 > 로그인완료페이지 생성후 이동
// hash로 암호화 작업 > 데이터베이스에서 password 
//쿠키로 보내는 것 까지 작업하기
//  

app.use("/BestSeller", bestSellerRouter)
app.use("/RealTimeBestSeller", realTimeBestSeller)
app.use("/DayBestSeller", dayBestSeller)
app.use("/MonthWeekBestSeller", monthWeekBestSeller)
app.use("/HotPriceBestSeller", hotPriceBestSeller)
app.use("/SteadySeller", steadySeller)
app.use("/join", joinRouter)
app.use("/login", loginRouter)



app.listen(8080);
