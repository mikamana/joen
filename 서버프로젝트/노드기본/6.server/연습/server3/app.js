const express = require("express");
const app = express();


//전역으로 설치하는 npm은 프로젝트의 루트 디렉토리에 설치된 npm과 다릅니다. 
//전역으로 설치된 npm은 모든 Node.js 애플리케이션에서 사용할 수 있습니다.
//프로젝트의 루트 디렉토리에 설치된 npm은 해당 프로젝트에서만 사용할 수 있습니다.

app.get("/", (req,res)=>{

  console.log(req.body);
  //  req.body는 HTTP 요청의 본문에 포함된 데이터를 가리킴
  // HTTP 요청의 본문은 HTML 안에 있는 name속성을 가진 요소에만 적용되어 나타나는지
  // res.redirect("/")

  res.sendFile(__dirname+"/index.html")

  // http 서버를 생성해도, 응답이 없으면 계속 로딩이 걸리는 이유가 
  // http의 부모인 TCP/IP의 속성 중 응답을 주어야하는 작동하는 속성이 있기 때문이다.

})

app.get("/join", (req,res)=>{

  //join.html은 현재 서버에서 만들어져있는 파일
  res.sendFile(__dirname+"/join.html")
  
})

app.get("/login", (req,res)=>{

  res.sendFile(__dirname+"/login.html")

})

app.get("/error", (req,res)=>{

  res.sendFile(__dirname,"/error.html")

})

app.use(express.urlencoded({extended:true})) // for parsing application
// submit 이벤트가 일어나면 x-www-form-urlencoded 데이터가 넘어옴
app.use(express.json()); // for parsing application/json
//express.json이 json 객체 형태로 해석한다.

//<input type="text" name="name" value="John Doe">
//<input type="number" name="age" value="30">
//submit 이벤트가 일어나면
//x-www-form-urlencoded 데이터가 넘어온다
//name=John Doe&age=30 (urlencoded로 해석된 데이터)
//이를 express.json()이 json 객체 형태로 해석한다
// app.use(express.urlencoded({extended:true}));
//form으로 제출되는 값은 x-www-form-urlencoded형태이다
// express.json은 이를 해석할 수 없다 따라서 express.urlencoded()함수로
// x-www-form-urlencoded형태의 요청 객체를 문자열이나 배열로 해석해준다.
//그 다음
// app.use(express.json());
//문자열이나 배열로 해석 된 HTTP 요청의 본문(body)을
//{(name attribute):value}의 형식인 json 객체로 바꾸어준다
//body를 인코딩하는 작업


let memberList = [];

app.post("/join", (req,res)=>{

  let {name,id,password,password_check,address} = req.body

  console.log(req.body);

  memberList.push({name,id,password,password_check,address})

  res.redirect("/");
  console.log(memberList);
  
})

app.post("/login", (req,res)=>{

  // let id = req.body.id
  // let pass = req.body.pass
  let {id,pass} = req.body
  let result = 0;

  for(let i = 0; i<memberList.length; i++){
    // let member = memberList[i];

    if(id === memberList[i].id && pass === memberList[i].password){

      result = 1;
      i = memberList.length;

    }

  }

  if(result===1){
    res.redirect("/")
  }else{
    res.redirect("/error")
  }


})




//웹서버는 하나밖에 못돌림
app.listen(3030);