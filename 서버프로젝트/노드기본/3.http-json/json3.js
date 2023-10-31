const http = require("http");

let address = [];

// 주소록 배열 객체 생성
// POST 방식으로 이름, 주소를 입력받아 address에 추가
// GET 방식으로 주소록(address) 확인

const server = http.createServer((req,res)=>{

  res.setHeader("Content-Type","text/html")
  const strAddress = JSON.stringify(address)
  // 제이슨 문자 형태로 변경
  const url = req.url
  const method = req.method

  if(url === "/address"){
    if(method === "GET"){
      if(address.length != 0){
        res
        .writeHead(200,{
          "Content-Type":"application/json"
        }).end(JSON.stringify(address));
      }else{
        res.end("-- No data --");
      }
    }else if(method === "POST"){
      const body = [];
      req.on("data",(chunk)=>{
        body.push(chunk);
      }).on("end", ()=>{
        const bodyStr = Buffer.concat(body).toString();
        //concat : 결합
        const jsonStr = JSON.parse(bodyStr);
        address.push(jsonStr);
        res.writeHead(201).end();
      })
    }
  }


})

server.listen(9000);
