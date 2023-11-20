import {db} from "../db/database.js";





  export async function insertCart({qty,size,id,pid}){

    return db.execute("insert into shoppy_cart(qty,size,id,pid,cdate) value(?,?,?,?,sysdate())",[qty,size,id,pid])
    .then((result)=> "ok");
  
  }
  