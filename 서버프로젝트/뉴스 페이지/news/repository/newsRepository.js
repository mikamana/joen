import {db} from "../db/database.js";

export async function getAll(){
  return db.execute('select nid,title,info,url,left(date,10) as date from news')
  .then((result)=> result[0]);
}

export async function create(title,info,url){
  return db.execute("insert into news(title,info,url,date) values(?,?,?,curdate())",[title,info,url])
  .then((result)=> "success");
}

export async function getNews(nid){
  return db.execute("select nid,title,info,url,left(date,10) as date from news where nid = ?",[nid])
  .then((result)=>result[0]);
}

export async function remove(nid){
  return db.execute("delete from news where nid = ?",[nid])
  .then((result)=>"success");
}

export async function replyGetAll(nid){
  return db.execute("select rid,content,redate from news_reply where nid = ?",[nid])
  .then((result)=>result[0]);
}

export async function replyCreate(nid,content){
  return db.execute("insert into news_reply(nid,content,redate) values(?,?,sysdate())",[nid,content])
  .then((result)=>"success");
}

export async function replyRemove(rid,nid){
  return db.execute("delete from news_reply where rid=? and nid=?",[rid,nid])
  .then((result)=>"success");
}