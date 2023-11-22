import * as orderRepository from "../repository/orderRepository.js";

export async function insertOrder(req,res){

  const cartListArr = req.body
  console.log(cartListArr);
  const result = await orderRepository.insertOrder(cartListArr)
      
  if(result==="ok"){

    res.status(204);

  }




}

export async function getOrder(req,res){

  const {pid} = req.params

  console.log(pid);

  const result = await orderRepository.getOrder(pid);
  
  res.json(result)

}