const http = require("http");


let address = [
  {name : "홍길동", ads : "부천"},
  {name : "박길동", ads : "송도"},
  {name : "최길동", ads : "강남"},
  {name : "송길동", ads : "건대"},
]

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
      res.writeHead(200,{"Content-Length":Buffer.byteLength(strAddress),"Content-Type":"application/json"}).end(strAddress)
      // res.end()
      // res.write("ddd")
      //res로 응답해주고 
      // res.end();
      //end로 응답이 끝났다는 것을 명시해줌

    }else if(method === "POST"){
      const body = [];
      req.on("data",(chunk)=>{
        body.push(chunk)
        console.log(chunk);
        const resStr = JSON.stringify(chunk)
        const adsParse = JSON.parse(resStr)
        const arr = [];
        arr.push(chunk);
        const con = Buffer.concat(arr).toString();
        const arrRes = JSON.parse(con);
      })

      req.on("end",()=>{
        // 요청의 데이터가 모두 수신되었을 때 실행되는 코드
        const bodyStr = Buffer.concat(body).toString();
        const newAddress = JSON.parse(bodyStr);

        address.push(newAddress)
        console.log(bodyStr);

        res.writeHead(201);
        res.end();
      })
    }
  }


})

server.listen(8081);
