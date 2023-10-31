import {db} from "../db/database.js";

export async function createJoin(name,id,password,birthday,address,mail,checkbox,phone,recommand){

  return db.execute("insert into join_table(name,id,password,birthday,address,email,receipt_check,phone,recommand) values(?,?,?,?,?,?,?,?,?)",[name,id,password,birthday,address,mail,checkbox,phone,recommand])
  .then((result)=>"success")

}