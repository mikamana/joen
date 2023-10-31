import {db} from '../db/database.js';

export async function getListPage(bsid){
  return db
  .execute('select * from view_yes24 where bs_id=?',[bsid])
  .then((rows) => rows[0]);
}