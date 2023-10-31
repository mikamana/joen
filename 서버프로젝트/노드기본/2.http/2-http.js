const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
  res.setHeader("Content-Type", "text/html");
  const url = req.url;
  if(url === '/'){
    fs.createReadStream("./test/main.html").pipe(res);
  }else if(url === "/login"){
    fs.createReadStream("./test/login/login.html").pipe(res);
  }else if(url === "/courses"){
    fs.createReadStream("./test/courses/courses.html").pipe(res);
  }else{
    fs.createReadStream(".test/error.html").pipe(res);
  }
})

//EJS에서는 데이터를 출력하는 용도로 문법이 적용된다.

server.listen(9000, "192.168.50.8");