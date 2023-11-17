import express  from 'express';
import allProductsRouter from './router/allProductsRouter.js';
import cors from 'cors';
const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use('/', allProductsRouter);  // ':pid' 형식의 파라미터도 함께 처리
// server.use('/products/new', allProductsRouter);


server.listen(PORT, ()=>{
  console.log(`server running --->> ${PORT}`);
});
