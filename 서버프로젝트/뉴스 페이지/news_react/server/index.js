import express from "express";
import newsRouter from "./router/newsRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const PORT = process.env.PORT || 8000; // 프록시 서버 사용 포트
app.use("/", newsRouter)



app.listen(PORT)