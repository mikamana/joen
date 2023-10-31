import mysql from "mysql2";

const pool = mysql.createPool({
  host : 'localhost',
  port: '3306',
  user: 'root',
  password:'1234',
  database:'hrdb2019'
});

//mysql에 접속하는 함수 init > mysql 연결메서드 createConnection

export const db = pool.promise();

