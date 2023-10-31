import {db} from "../db/database.js";

export async function realTimeLogin(id){

  return db.execute('select password from dwitter where id = ?',[id])
  .then((result)=>result[0][0])
  // 문자면 문자로 들어가고 숫자면 ''이 들어감
  // 이중배열 > 0번지의 0번지로 찾음
}