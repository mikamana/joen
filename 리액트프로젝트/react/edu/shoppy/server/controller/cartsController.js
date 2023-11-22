import * as cartsRepository from "../repository/cartsRepository.js";

export async function insertCart(req,res){

  const {qty,size,id,pid} = req.body;

  console.log({qty,size,pid,id});
  let qtyLength = qty.qty;

  console.log(qtyLength);

  const result = await cartsRepository.insertCart({qty,size,id,pid});

  if(result==="ok"){

    res.json(result);

  }

}

export async function getCart(req,res){

  const {id} = req.params

  console.log(id);

  const result = await cartsRepository.getCart(id)

  res.json(result)
  
}


export async function removeCart(req,res){

  // const {cid} = req.params
  const cid = req.params.cid  
  const result = await cartsRepository.removeCart(cid)

  if(result==="success"){

    res.status(204).send('success');

  }

}
