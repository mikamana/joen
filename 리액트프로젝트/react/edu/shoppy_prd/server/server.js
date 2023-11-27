import express  from 'express';
import newProductsRouter from './router/newProductsRouter.js';
import allProductsRouter from './router/allProductsRouter.js';
import signupRouter from './router/signupRouter.js';
import loginRouter from './router/loginRouter.js';
import newCartsRouter from './router/newCartsRouter.js';
import cartsRouter from './router/cartsRouter.js';
import orderRouter from './router/orderRouter.js';
import uploadRouter from './router/uploadRouter.js';
import cors from 'cors';
import path from 'path';

const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use('/uploads', express.static(path.join('uploads')));
server.use('/products', allProductsRouter); //'/products/:id' 형식의 파라미터도 함께 처리
server.use('/products/new', newProductsRouter);
server.use('/signup', signupRouter);
server.use('/login', loginRouter);
server.use('/carts/new', newCartsRouter);
server.use('/carts', cartsRouter);
server.use('/order/new', orderRouter);
server.use('/upload', uploadRouter);

server.listen(PORT, ()=>{
  console.log(`server running --->> ${PORT}`);
});