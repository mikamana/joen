import {db} from "../db/database.js";

export async function insertOrder(cartListArr){


  cartListArr.map((list)=>{
    const sql = `insert into shoppy_order(id,pid,size,qty,totprice,odate) value(?,?,?,?,?,curdate())`
    console.log(list);
    return db.execute(sql,[list.id,list.pid,list.size,list.qty,list.totPrice])

  })
}

export async function getOrder(pid){

  const sql = `select so.id, so.oid, so.pid, so.size, so.qty, so.totprice, so.odate, sp.name, sp.image, sp.deli_price, sp.price from shoppy_order so inner join shoppy_products sp where so.pid = sp.pid and id=?`
  return db.execute(sql,[pid])
  .then((rows)=>rows[0])

}


// export async function insertOrder(cartListArr) {
//   const sql = `insert into shoppy_order(id,pid,size,qty,totprice,odate) value(?,?,?,?,?,curdate())`;

//   const results = [];
//   cartListArr.forEach((list) => {
//     results.push(db.execute(sql, [list.id, list.pid, list.size, list.qty, list.totprice]));
//   });

//   return results.map((result) => result.then((result) => "ok"));
// }

// export async function insertOrder(cartListArr) {
//   const sql = `insert into shoppy_order(id,pid,size,qty,totprice,odate) value(?,?,?,?,?,curdate())`;

//   const promises = cartListArr.map((list) => db.execute(sql, [list.id, list.pid, list.size, list.qty, list.totprice]));
//   const results = await Promise.all(promises);
//   return results.map((result) => {
//     if (result.affectedRows > 0) {
//       return "ok";
//     } else {
//       return "fail";
//     }
//   });
// }