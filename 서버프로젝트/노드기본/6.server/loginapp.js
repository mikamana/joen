const express = require("express");
const app = express();
const path = require("path");
const pug = require("pug");


// const process = require("process");
// express 프레임
let arr = [];


app.get("/",(req,res)=>{
  // const indexPath = path.join(__dirname);
  res.sendFile(__dirname + "/index.html")
})

app.get("/join",(req,res)=>{

  const loginPath = path.join(__dirname,"login");
  res.sendFile(loginPath + "/join.html")

})

app.get("/login",(req,res)=>{

  res.setHeader("Content-Type", "text/html");
  const loginPath = path.join(__dirname,"login");
  //__dirname은 global안에있는 프로퍼티이기 때문에 require해서 가져오지 않아도 됌
  // os마다 사용하는 Path가 달라서 path.join을 사용한다.
  // res.sendFile("/login.html") 이 경로는 글로벌이아닌 express이 설치된 루트를 찾아서 node_modules를 찾는다.
  // console.log(process.cwd());
  res.sendFile(loginPath + "/login.html")
  // send 메서드는 스트링형식으로 들어가야함
  // 그래서 사용하는 메서드 sendFile메서드이다.
})

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended:true})) // for parsing application
// application/json 형식의 요청이 들어오면 express.json() 미들웨어가 요청 본문을 파싱하고 req.body 객체에 저장.
// body를 인코딩하는 작업들이다.
//use는 메서드가아님 (미들웨어) 데이터를 요청받지는않고 미리실행을 하는것을 use
// 미들웨어는 순서를 지켜야함, 현재 위치에 없으면 체이닝으로 위에서 찾음 
app.post("/join", (req,res)=>{

  let {id,password,password_check,address,name} = req.body
  // 주소가 배열


  // arr에서 id,pass 일치하면 --> 1, 일치하지않으면 -->0
  if(id && password && password_check && address[0] && address[1] && address[2] && name){
    res.redirect("/")
  }else{
    res.redirect("/error");
  }
  arr.push({id,password,password_check,address,name});

  console.log(arr);

})


app.get('/error',(req,res)=>{
  const loginSucPath = path.join(__dirname,"error.html")
  res.sendFile(loginSucPath);
})// 이 에러는 클라이언트가 호출하는것이아니라 내부에있는 미들웨어가 호출하는 것

app.post("/login", (req,res)=>{
  // 폼에서 전송된 데이터를 가져옵니다.
  // res.setHeader("Content-Type", "text/html")
  const loginSucPath = path.join(__dirname,"login")

  // console.log(req.body);
  const {id, pass} = req.body
  // 서버로 submit해서 넘어오는 모든 값, 서버랑 연결되어있는 값은 form에 있는 name으로 설정된 값이다. 모든 언어가 동일
  // const id = req.body.id;
  // const pass = req.body.pass;
  let result = 0;
  
  for(let i=0; i<arr.length; i++){

    let a = arr[i];

    if(a.id===id && pass===a.password){
      result = 1;
      i = arr.length;
    }
  }

  if(result == 1){
    res.redirect("/")
  }else{
    res.redirect("/error");
  }
  
  // if(id === "try226" && pass === "1234"){
  //   // res.sendFile(loginSucPath+"/login_suc.html");
  //   // res.sendFile(ejs.renderFile(loginSucPath+"/login_suc2.ejs"),{loginSuc});
  //   // res.sendFile(이안에 ejs.renderFile)이 들어가면 이 메서드 자체 텍스트가 브라우저에서 인식을 하기 때문에 이런식으로 사용 불가능

  //   res.redirect("/");

  // }else{

  //   // res.sendFile(loginSucPath+"/login_fail.html");
  //   res.redirect("/error");
  //   // redirect는 말그대로 url이 다시 접속하는 것이다.

  // }

  res.status(201);

})



app.listen(8080);