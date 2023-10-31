const express = require("express");
const server = express();
//express 미들웨어
const courses = [
  {name : "HTML"},
  {name : "CSS"},
  {name : "JavaScript"},
  {name : "Node"},
  {name : "Express"}
];

server.get('/',(req,res)=>{
  res.send('hello world~');
});// 여기까지 하나의 단위를 미들웨어라고 함
// 클라이언트에서 요청한 것을 서버가 처리하는 것을 미들웨어

server
.get('/',(req,res)=>{
  res.send('hello world~');
});

server.get('/course', (req,res)=>{
  res.setHeader('Content-Type','application/json');
  res.status(200);
  res.json(courses);
})

server.post('/course',(req,res)=>{
  const body = [];
  res.setHeader('Content-Type','application/json');
  req.on("data",(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  }).on("end",()=>{
    courses.push(JSON.parse(Buffer.concat(body).toString()));
    res.status(201).end();
  });

})
// .use()
// .use();
//위처럼 체이닝이 가능함

server.listen(3300);


