import {db} from '../db/database.js';

/**
 * getIdCheck : 회원 아이디 중복체크
 */
export async function getIdCheck(id){
  const sql = `select count(id) as cnt
                  from shoppy_member where id=?`;

  return db
        .execute(sql, [id])
        .then((rows) => rows[0][0]);  //{cnt:1} or {cnt:0}
}

/**
 * getLogin : 회원 로그인
 */
export async function getLogin(id){
  const sql = `select count(pass) as cnt, ANY_VALUE(pass) as pass 
                  from shoppy_member where id=?`;

  return db
        .execute(sql, [id])
        .then((rows) => rows[0][0]);  //{cnt:1, pass:'dfdfd~~~'}
}

/**
 * insertMember : 새로운 회원 등록
 */
export async function insertMember({name,id,hashPass,phone}){
  const sql = `insert into shoppy_member(name,id,pass,phone,mdate)  
                  values(?,?,?,?,sysdate())`;

  return db
        .execute(sql, [name,id,hashPass,phone])
        .then((result) => 'ok');
}
