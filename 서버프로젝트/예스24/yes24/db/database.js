import mysql from "mysql2";
// 프로미스 기능을 사용하려면 mysql2를 사용
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'hrdb2019'
});

export const db = pool.promise();

