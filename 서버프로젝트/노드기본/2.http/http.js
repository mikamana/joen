// const request = require("request")
// 클라이언트에서 서버로 요청할 떄
const http = require("http")
// http 모듈을 사용하여 서버를 생성
//서버를 만든다.
console.log("start");
//http는 TCP/IP의 자식
const server = http.createServer((req,res)=>{
const fs = require("fs");
  // 접속한 클라이언트의 정보 req
  // 서버가 클라이언트에게 전송하는 응답은 res
  // 첫번째 인수는 선택적 옵션객체
    //  옵션객체는 서버의 동작을 제어하는 데 사용되는 속성을 포함
    // 선택적 옵션 객체 목록
  // 두번째 인수는 HTTP요청을 처리하는 함수  

  //요청
  console.log("incoming...");
  // console.log(req.method);
  // get방식으로 접근
  // console.log(req.url);
  console.log(req.httpVersion);
  // http버전확인
  // console.log(req.headers);
  // 접속한 클라이언트의 header의 정보를 보여준다.

  const url = req.url
  console.log(`url---> ${url}`);
  // 응답 - url의 path에 따라 응답을 처리 /join /login
  /* if(url === '/'){
    res.write(`<html>`);
    res.write(`<head><title>Node Server Test!</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Welcome!!</h1>`);
    res.write(`</body>`);
    res.write(`</html>`);
    // 큰 덩어리 형태로도 만들 수 있고, 문자열 형태로 만들 수 있다.
    res.end();
    // 응답 헤더 > res.whiteHead
    // 클라이언트에게 응답에 대한 정보를 제공
  }else if(url === '/courses'){
    res.write(`<html>`);
    res.write(`<head><title>Node Server Test!</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>courses!!</h1>`);
    res.write(`</body>`);
    res.write(`</html>`);
    // 큰 덩어리 형태로도 만들 수 있고, 문자열 형태로 만들 수 있다.
    res.end();
    // 응답 헤더 > res.whiteHead
    // 클라이언트에게 응답에 대한 정보를 제공
  }else{
    res.write(`<html>`);
    res.write(`<head><title>Node Server Test!</title></head>`);
    res.write(`<body>`);
    res.write(`<h1>Not Found Page~ 404!!</h1>`);
    res.write(`</body>`);
    res.write(`</html>`);
    // 큰 덩어리 형태로도 만들 수 있고, 문자열 형태로 만들 수 있다.
    res.end();
    // 응답 헤더 > res.whiteHead
    // 클라이언트에게 응답에 대한 정보를 제공
  } */
  res.setHeader("Content-Type", "text/html");
  // 지금부터 보내는 모든 파일은 html 형태로 보낸다는 의미
  if(url === '/'){
    fs.createReadStream("./html/index.html", {highWaterMark:64}).pipe(res);
    // stream으로 파일을 읽어온 후에
    // res로 요청한 사람에게 전송해야함
    // pipe 메서드를 사용하여 res로 바로 연결
    // res.setHeader("Location", "./index.html");
    // res.end();
  }else if(url === '/courses'){
    fs.createReadStream("./html/courses.html", {highWaterMark:64}).pipe(res);
    // res.setHeader("Location", "./courses.html");
    // res.end();
  }else{
    fs.createReadStream("./html/error.html", {highWaterMark:64}).pipe(res);
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("404");
  }
});
// 리스닝 작업을 해주어야한다.
// 서버가 돌도록 작업
server.listen(8080); //http://localhost:8080

//http.createServer 서버를 생성
//server.listen 함수안에 포트번호를 넣어 서버 포트번호 생성
//클라이언트쪽에서 포트번호로 접속할 수 있다.
//http.createServer(req,res)에서 req는 접속한 클라이언트의 정보
//http.createServer(req,res)에서 res는 서버의 정보

