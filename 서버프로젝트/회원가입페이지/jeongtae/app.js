import express from "express";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import memberRouter from "./router/member.js";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// module 방식으로 현재 경로 가져오는 방법
app.use(express.static(__dirname));

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + "/index.html");
});

app.use("/member", memberRouter);

app.listen(8080);