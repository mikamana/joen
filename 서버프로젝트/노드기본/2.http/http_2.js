const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
  // Node 서버 생성

  let url = req.url;
  
  res.setHeader("Content-Type", "text/html");
  // 지금부터 보내는 모든 파일은 html 형태로 보낸다는 의미
  
  if(url === "/"){

    fs.createReadStream("./html/index.html").pipe(res)

  }else if(url === "/courses"){

    fs.createReadStream("./html/courses.html").pipe(res)

  }else{

    fs.createReadStream('./html/error.html').pipe(res)

  }

})

server.listen(8080);
// 오라클이라는 데이터베이스에 관리하는 내부서버가 있는데, 그 서버의 default값이 8080이다.
// 자바나 톰캣에서도 default로 8080포트 사용

