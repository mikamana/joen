import express from "express";
import * as productsController from "../controller/productsController.js";
import * as memberController from "../controller/memberController.js";

const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get("/", productsController.getAllProducts);
router.post("/login", memberController.loginCheck);
router.post("/signup", memberController.signUpMember);
router.get("/products", productsController.getAllProducts);
router.get("/products/:pid", productsController.getDetailProducts);
router.post('/products/new', productsController.insertProduct);

export default router;

