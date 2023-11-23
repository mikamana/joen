import {db} from "../db/database.js";





  export async function insertCart({qty,size,id,pid}){

    return db.execute("insert into shoppy_cart(qty,size,id,pid,cdate) value(?,?,?,?,sysdate())",[qty,size,id,pid])
    .then((result)=> "ok");
  
  }

  export async function getCart(id){
    const sql = `select sc.pid,cid,qty,size,substring(cdate,1,10) as cdate,price,deli_price as deli,image,sc.id,sp.name,sp.info from shoppy_cart sc inner join shoppy_products sp, shoppy_member sm where sc.pid = sp.pid and sm.id = sc.id and sc.id = ?
    `
    return db.execute(sql ,[id])
    .then((rows)=>rows[0])
  }

  export async function removeCart(cid){

    const sql = `delete from shoppy_cart where cid = ?`
    return db.execute(sql, [cid])
    .then((result)=>"success")

  }

/*   export async function updateCart(qty,cid){
    const sql = `update shoppy_cart set qty = ? where cid = ?`

    return db.execute(sql,[qty,cid])
    .then((result)=>"success")
  } */

  /*
    updateCart 장바구니 수량 업데이트
  */
  export async function updateCart(id,cid,flag){
    let sql = ``;

    if(flag==="minus"){

      sql = 'update shoppy_cart set qty = qty-1 where id = ? and cid = ?'

    }else if(flag==="plus"){

      sql = 'update shoppy_cart set qty = qty+1 where id = ? and cid = ?'

    }

    return db.execute(sql,[id,cid])
    .then((result)=>"success")
  }