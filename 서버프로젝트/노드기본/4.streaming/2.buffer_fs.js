const fs = require("fs");
const process = require("process");
const fsp = require("fs").promises
//파일을 만들고 읽기전 ,읽은후 소모되는 메모리양을 확인
//파일 있어야함 (파일을 생성)
// console.log(process.memoryUsage.rss());

/* fs.readFile('./file.txt',(err,data)=>{
  //첫번째 매개변수로 오는게 error, 저장된 데이터 data(외부 파일을 내부적으로 buffer를 넣어준다.)
  // console.log(process.memoryUsage.rss());
  // console.log("--finished--");
  fs.writeFile("./new_file.txt",data,(err)=>{
    console.log("데이터 저장을 완료했습니다. 메모리 사용량 체크");
    console.log(process.memoryUsage.rss());
  })
  //읽은 데이터를 file2.txt 파일에 저장
}) */
// 읽은 데이터의 파일 용량이 너무 크면 스트리밍으로 파일을 쪼개서 buffer의 사이즈만큼 저장해서 보낸다.

/* fsp.promises.readFile("./file.txt")
//프로미스를 사용하려면 promises 프로퍼티 사용해야함
.then((data)=>{
  fsp.writeFile("./new_file2.txt",data)
  .then((data)=>
    console.log("데이터 저장을 완료했습니다. 메모리 사용량 체크"))
    .catch(err=>{
      console.log("err");
    })
})
.catch(err => {
  console.log(err);
});
 */

fsp.readFile("./file.txt")
//프로미스를 사용하려면 promises 프로퍼티 사용해야함
.then((data)=>{
  fsp.writeFile("./file3.txt",data)
  .then()
  .catch()
}).catch(console.error)





/* fs.writeFile("./new_file.txt","hh",(err)=>{

  console.log("dd");

}) */

/* fs.readFile('./file.txt',(_,data)=>{
  //데이터 타입을 알고싶을 때 매개변수 앞을 명시해주지않으면 data가 에러로 인식
  console.log(process.memoryUsage.rss());
  console.log("--finished--");
  // console.log(data.toString());
}) */
// 



// console.log(process.memoryUsage.rss());
//메모리 사용량 확인
//현재 메모리 사용량 확인


