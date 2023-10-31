const express = require("express");
const server = express();

let address = [];


server.get("/address",(req,res)=>{

  res.setHeader("Content-Type",'application/json')
  res.json(address)
  //응답할 내용
  res.status(200);
  //상태코드 지정 (GET방식)
  //링크를 통해서 페이지 넘어갈 경우에는 대부분 쿼리스트링을 사용
  
})

server.post('/address',(req,res)=>{

  const body = [];
  res.setHeader('Content-Type','application/json');
  req.on("data", (chunk)=>{

    // console.log(chunk);
    body.push(chunk);

  }).on("end", ()=>{

    const bodyStr = JSON.parse(Buffer.concat(body).toString())
    // 문자열인 상태라 JSON.parse를 해주어 객체형태로 바꾸어준다.
    
    address.push(bodyStr);

    res.status(201).end();
    // on(end)이벤트에 status()와 end() 메서드를 추가해줘야 응답이 정상적으로 완료됌
    
  })

})

server.listen(3301)



