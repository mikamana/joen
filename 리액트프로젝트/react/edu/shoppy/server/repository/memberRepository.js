import {db} from "../db/database.js";


export async function signUpMember({id,name,hashPass,phone}){

  const sql = "insert into shoppy_member(id,name,pass,phone,mdate) value(?,?,?,?,curdate())";
  return db.execute(sql,[id,name,hashPass,phone])
  .then((result)=>"ok");

}

export async function loginCheck(id){

  return db.execute("select count(pass) as cnt, ANY_VALUE(pass) as pass from shoppy_member where id= ?",[id])
  .then((rows)=>rows[0][0])

}// 회원 로그인

export async function getIdCheck(id){

  return db.execute("select count(pass) as cnt from shoppy_member where id= ?",[id])
  .then((rows)=>rows[0][0])
}

