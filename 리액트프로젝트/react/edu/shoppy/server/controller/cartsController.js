import * as cartsRepository from "../repository/cartsRepository.js";

export async function insertCart(req,res){

  const {qty,size,id,pid} = req.body;

  let qtyLength = qty.qty;

  const result = await cartsRepository.insertCart({qty,size,id,pid});

  if(result==="ok"){

    res.json(result);

  }

}

export async function getCart(req,res){

  const {id} = req.params

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

// export async function updateCart(req,res){

//   const {qty, cid,flag} = req.body
//   // shopyy_cart의 id,pid, qty, 상태(증가,감소)
  
//   console.log({qty,cid,flag});  

//   // if(flag==="minus"){

//   // }else if(flag==="plus"){

//   // }

//   const result = await cartsRepository.updateCart(qty,cid)

//   if(result==="success"){

//     res.status(204)

//   }


// }

export async function updateCart(req,res){

  // const {qty, cid,flag} = req.body
  // shopyy_cart의 id,pid, qty, 상태(증가,감소)
  
  const {id,cid,flag} = req.params
  console.log({id,cid,flag});

  const result = await cartsRepository.updateCart(id,cid,flag)

  if(result==="success"){

    res.status(204).send("success")

  }


}

