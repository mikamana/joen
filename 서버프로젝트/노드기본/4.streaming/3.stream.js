//파일을 읽어오는 방법 => Stream 사용

const fs = require("fs");
const fsq = require("fs").promises;
const path = require("path")
//파일을 대상으로 쪼개서 읽어야함
// const newFile = await open('/dev/node/1.node개요/streaming') 

const readStream = fs.createReadStream('./file.txt',{highWaterMark:64,})// highWatermark 버퍼의 사이즈 결정
// 다리건설 , 옵션이 아무것도 없으면 디폴트 64kib씩 버퍼타입으로 만들어져있음 
// 옵션이 여러개가 들어갈 수 있어서 객체로 들어갈 수 있는것
// 읽어올때 사용하는 스트림
// 스트림은 단방향으로 쪼개짐


const buf = [];
// 버퍼는 배열형태이다.
readStream.on("data",(chunk)=>{
  //호출하는 이벤트 타입 data
  //chunk 는 버퍼타입
  buf.push(chunk);
  console.count('data');
  console.log(chunk.toString());
  // readStream.close();
}).on("close",()=>{
  console.log("--finished--");
  // 이벤트 명시만 해줘도 close 작동됌 (콘솔만 찍어도 close 작동)
})
/* readStream.on("close", ()=>{
  console.log(buf.length);
  console.log(buf);
  console.log(buf.join(''));
  // close로 끝남을 명시해주어야함 계속 실행 가능한 상태로 가비지컬렉터의 대상이 되지않음
  //console.log("--finished--");
}) */


// console.log(stream);
// fs.createWriteStream()
// 저장할 떄 사용하는 스트림
// 스트림으로 모든 데이터를 받아서 처리할 수 있다.
// 
