import express from "express";
import ejs from "ejs";
import * as list from "./data.js";
const router = express.Router()

router.use(express.json())

  router.get("/",(req, res, next)=>{

    ejs.renderFile("./template/list.ejs",{})
    .then((data)=>res.end(data)).catch()
  
})

router.get("/:page", (req, res, next)=>{

  res.json(list.bestSellerList)


})





export default router;