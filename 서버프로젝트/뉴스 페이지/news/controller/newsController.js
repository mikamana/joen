import * as newsRepository from "../repository/newsRepository.js";
import ejs from "ejs";

export async function getAll(req, res){
  const rows = await newsRepository.getAll();

      ejs.renderFile("./template/list.ejs", {list:rows})
      .then((result)=>{
        res.end(result)
      })
      
}

export async function create(req,res){
  const {title,info,url} = req.body
  const result = await newsRepository.create(title,info,url);

  if(result === "success"){
    res.redirect('/news');
  }

}

export async function getNews(req,res){
  const nid = req.params.nid;
  const rows = await newsRepository.getNews(nid);

  ejs.renderFile("./template/content.ejs", {newsContent:rows[0]})
  .then((result)=>{res.end(result)})
  
}

export async function remove(req,res){
  const {nid} = req.body
  const result = await newsRepository.remove(nid);

  if(result=== "success"){
    res.status(204).send("dd");
  }
}

export async function replyGetAll(req,res){
  
  const nid = req.params.nid
  const rows = await newsRepository.replyGetAll(nid)

  res.json(rows);
}

export async function replyCreate(req,res){
  const {nid,content} = req.body;
  console.log(nid,content);
  const result = await newsRepository.replyCreate(nid,content)

  if(result === "success"){
    res.status(201).send("create success!")
  }

}

export async function replyRemove(req,res){
  const {rid,nid} = req.body
  const result = await newsRepository.replyRemove(rid,nid)

  if(result==="success"){
    res.status(204).send("delete success!");
  }
}