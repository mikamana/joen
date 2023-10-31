import express from "express";
import bestSellerRouter from "./router/bestSeller.js";

const app = express();


app.use("/bestSeller", bestSellerRouter);



app.listen(8080)