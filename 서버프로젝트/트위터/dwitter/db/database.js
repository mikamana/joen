// 데이터베이스 연동되는 데이터를 자바스크립트 객체로 바꿔주는 파일
import mysql from "mysql2";
// mysql연동
// database 연동 파일 > 나중에 묶어서 configration 파일로 바꿔야함 
const pool = mysql.createPool({
  host : 'localhost',
  port: '3306',
  user: 'root',
  password:'1234',
  database:'hrdb2019'
});

// //mysql에 접속하는 함수 init > mysql 연결메서드 createConnection
// const db = {
//   init: function(){
//     return mysql.createConnection(dbInfo);
//     // Connection을 관리하는 connection 툴이 등장함 db쪽 orn이 등장함
//   },
//   connect: function(conn){
//     conn.connect(function(err){
//       if(err) console.error('mysql 연결 에러 :' + err);
//       else console.log("mysql 연결 성공");
//     });
//   }
// };

export const db = pool.promise();
//connection은 프로미스가 적용이 안된다.





