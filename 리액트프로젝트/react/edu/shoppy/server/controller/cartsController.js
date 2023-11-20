import * as cartsRepository from "../repository/cartsRepository.js";

export async function insertCart(req,res){

  const {qty,size,id,pid} = req.body;

  console.log({qty,size,pid,id});

  const result = await cartsRepository.insertCart({qty,size,id,pid});

  if(result==="ok"){

    res.status(204);

  }

}