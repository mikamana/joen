import {db} from "../db/database.js";


export async function getAllProducts(){

  return db.execute("select * from shoppy_products")

  .then((result)=>result[0])

}

export async function getDetailProducts(pid){

  return db.execute("select * from shoppy_products where pid = ? ", [pid])

  .then((result)=>result[0])

}

export async function insertProduct(name,image,price,info) {

  const sql = "insert into shoppy_products(name,image,price,info,pdate) value(?,?,?,?,curdate())";

  return db.execute(sql,[name,image,price,info])
  .then((result)=>"ok");

}


