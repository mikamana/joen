import * as productsRepository from "../repository/productsRepository.js";




export async function getAllProducts(req,res){


  const result = await productsRepository.getAllProducts()

  res.json(result)

}

export async function getDetailProducts(req,res){

  const {pid} = req.params

  console.log(pid);
  const result = await productsRepository.getDetailProducts(pid)

  res.json(result)

}

export async function insertProduct(req, res) {

  const { image, name, price, info } = req.body;

  console.log({ image, name, price, info });

  const result = await productsRepository.insertProduct(name,image,price,info)

  if(result==="ok"){

    res.redirect("/");

  }

}

