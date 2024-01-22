import { db } from '../db/database.js';

export async function getList() {
  const sql = ``;
  return db
    .execute(sql)
    .then((rows) => rows[0]); //rows[0] => [{}], rows[0][0] => {}
}