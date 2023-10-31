// Router --> Controller <-- DB연동 필요시 --> Repository
//                 |
//                 |
//             결과 전송
// router는 controller 레파지토리를 가지고있고, controller는 repository의 레파지토리를 가지고있다.

import {db} from "../db/database.js";
// {}는 여러개 import 필요할시 넣음

export async function getAll(){
  
  //controller에서 getAll호출
  return db.execute('select id,name,left(date,10) as date,content from dwitter')
  .then((result)=> result[0]);
  // return하여 다른 곳에서도 사용 가능 

}

export async function create(id,name,content){
  
  //데이터가 함수의 파라미터로 넘어가야함
  return db.execute('insert into dwitter(id,name,date,content) values(?,?,?,curdate(),?)',[id,name,content])
  .then((result)=> 'success');

}

export async function getDwitter(id){

  return db.execute('select id,name,left(date,10) as date,content from dwitter where id =?',[id])
  // id 하나여도 타입을 동일하게 배열 형태로 만들어줌
  .then((result)=> result[0]);
  
}

export async function update(id,content){

  return db.execute('update dwitter set content = ? where id = ?', [content,id])
  .then((result)=> 'success');

}

export async function remove(id){

  return db.execute('delete from dwitter where id = ?', [id])
  .then((result)=> 'success');

}

export async function signupCreate(params){

  return db.execute("insert into dwitter(id,password,name,date,content) values(?,?,?,curdate(),?)",params)
  .then((result)=>"success");

}


