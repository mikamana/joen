import express from "express";
import dwitterRouter from "./router/dwitterRouter.js";
import loginRouter from "./router/loginRouter.js";
import signupRouter from "./router/signupRouter.js";
import cookies from "cookie-parser";


const app = express();
app.use(cookies());
// 넘어오는 쿠키에 대해서 파싱하는 작업
app.use("/dwitter",dwitterRouter);
app.use("/login", loginRouter);
app.use("/signup", signupRouter);

app.listen(8080,function(){
  console.log("server start~!!");
});



