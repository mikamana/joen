const express = require("express");
const app = express();

app.get('/', (req, res, next) => {

  //next는 라우팅이 필요할 경우 사용
  // 메소드를 묶고있는 하나의 단위를 (미들웨어)의 특징 : 체이닝이 가능하다.
  // 미들웨어의 마지막 부분에는 에러처리를 위한 코드를 넣어준다. 예:) status 404
  res.send("dd")

}); //해당 페이지를 요청 status(200)

app.use(express.json()); // JSON 객체로 생성

app.post('/join', () => {

  const { a, b, c } = req.body;

})  //post 방식은 body를 통해 데이터 전달, JSON 객체로 생성

//put 방식은 데이터 replace

app.put('/:id', () => {

  const id = req.params.id;

})

//delete 방식은 데이터 delete
app.delete('/:id', () => {

  const id = req.params.id;

})

app.listen(8080);





