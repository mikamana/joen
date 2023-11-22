import express from "express";
import * as productsController from "../controller/productsController.js";
import * as memberController from "../controller/memberController.js";
import * as cartsController from "../controller/cartsController.js";
import * as orderController from "../controller/orderController.js";


const router = express.Router()

router.use(express.json())
router.use(express.urlencoded({extended:true}))

router.get("/", productsController.getAllProducts);
router.post("/login", memberController.loginCheck);
router.post("/signup", memberController.signUpMember);
router.get("/signup/:id", memberController.getIdCheck);
router.post("/carts/new", cartsController.insertCart);
router.get("/carts/:id", cartsController.getCart);
router.get("/carts/:id/:cid", cartsController.removeCart);
router.get("/products", productsController.getAllProducts);
router.get("/products/:pid", productsController.getDetailProducts);
router.post('/products/new', productsController.insertProduct);
router.post("/order/:pid", orderController.insertOrder)
router.get("/order/:pid", orderController.getOrder)



//라우터 정리해야함


export default router;

