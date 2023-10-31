const http = require("http");
const courses = [
{name : "HTML"},
{name : "CSS"},
{name : "JavaScript"},
{name : "Node"},
{name : "Express"}]
//서버 생성
//서버 리스닝(8000)
const server = http.createServer((req,res)=>{

  res.setHeader("Content-Type","text/html");
  const strCourses = JSON.stringify(courses);
  const url = req.url;
  const method = req.method;
  if(url === "/courses"){
    if(method === "GET"){
      res.writeHead(200, {'Content-Length': Buffer.byteLength(strCourses),'Content-Type': 'application/json'}).end(strCourses);
      // JSON객체를 받아올 경우 writeHead로 받아온다.
      // 'Content-Length': Buffer.byteLength(strCourses)에는 JSON을 string타입으로 바꾼후에 저장해야한다.
      // 'Content-Type': 'application/json'으로 설정 

    }else if(method ==="POST"){
      // res.write("Welcome")
      // post 방식으로 요청이 오면 --> JSON 데이터 받기
      const body = [];
      req.on("data",(chunk)=>{
        // console.log(chunk.toString());
        body.push(chunk)
      })

      req.on('end',()=>{
        //body의 데이터를 string
        const bodyStr = Buffer.concat(body).toString();
        //string 문자열을 JSON 객체로 파싱
        const newCourse = JSON.parse(bodyStr);
        //courses 배열에 추가
        courses.push(newCourse)
        // //결과 완료

        // console.log(courses);
        // res.writeHead(201);
        // res.end();


      });
      // res.end(courses.push(body))
      // res.end()
    }
  }else{
    res.write("File not Found~~")
    res.end();
  }

  console.log(bodyStr);





})



server.listen(8080)