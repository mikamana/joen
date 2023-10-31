const http = require("http");
const fs = require("fs");
const ejs = require("ejs");

const name = 'hong';
let courses = [
  {name : 'HTML'},
  {name : 'Node.js'},
  {name : 'CSS'},
  {name : 'JavaScript'},
];

let scoreList = [
  {name:"HTML", grade:"A"},
  {name:"Node.js", grade:"B"},
  {name:"CSS", grade:"C"},
  {name:"JavaScript", grade:"D"},
]

console.log("-- server start --");
const server = http.createServer((req,res)=>{
  res.setHeader("Content-Type", "text/html");

  console.log("incoming...");
  const url = req.url;
  // 1. 클라이언트 요청을 url로 받음
  // 2. 패스 체크 :  / --> index.ejs
  // 3. ejs.renderFile(매개변수) <= 프로미스 타입 처리;
  
  if(url === "/"){
    ejs.renderFile("./template/index.ejs", {name})
    .then((data)=> res.end(data))
    .catch(console.error)
  }else if(url === "/courses"){
    ejs.renderFile("./template/courses.ejs", {courses})
    .then((data)=>res.end(data))
    .catch(console.error)
  }else if(url === "/score"){
    ejs.renderFile("./template/score.ejs", {scoreList})
    .then((data)=>res.end(data))
    .catch(console.error)
  }else{
    ejs.renderFile("./template/error.ejs", {name})
    .then((data)=>res.end(data))
    .catch(console.error)
  }
  
})


server.listen(3000)



