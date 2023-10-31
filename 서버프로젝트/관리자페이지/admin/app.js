import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import ejs from "ejs";
import customer from "./router/customer.js";
import joinRouter from "./router/joinRouter.js";
import ejoinRouter from "./router/ejoinRouter.js"
import unregisterRouter from "./router/unregisterRouter.js";
import employee from "./router/employee.js";
import updateRouter from "./router/updateRouter.js";
import productRouter from "./router/productRouter.js";
import orderRouter from "./router/orderRouter.js";
import detailRouter from "./router/detailRouter.js";
import salesRouter from "./router/salesRouter.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// 경로가져오기
app.use(express.static(__dirname));
// 경로안에있는 파일을 정적파일로 저장하고 사용

app.get("/", (req, res, next) => {
  ejs.renderFile(__dirname + "/index.ejs")
    .then((result) => res.end(result))
})
app.use("/customerDate", customer);
app.use("/join", joinRouter);
app.use("/ejoin", ejoinRouter);
app.use("/employeeDate", employee);
app.use("/unregister", unregisterRouter);
app.use("/update", updateRouter);
app.use("/createProduct", productRouter);
app.use("/orderHeader", orderRouter);
app.use("/orderDetail", detailRouter);
app.use("/sales", salesRouter);



app.listen(8080);