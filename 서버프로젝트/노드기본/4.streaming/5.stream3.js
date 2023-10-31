//readStream을 이용하여 file.txt 파일의 내용을 16바이트씩 읽어서
//file-stream.txt 파일 안에 writeStream을 이용하여 저장해주세요.

const fs = require("fs");


// fs.writeFile("./file-stream.txt","ddd",()=>{
//   console.log("파일생성성공");  
// }) // 파일 생성

const readStream = fs.createReadStream('./file.txt',{highWaterMark:16})
const writeStream = fs.createWriteStream('./file-stream.txt');
//자바스크립트 엔진 밖 파일은 다 외부파일
const buf = [];

readStream.on("data",(chunk)=>{
  
  writeStream.write(chunk);
  /* buf.push(chunk);
  chunk.toString();
  console.log(buf);
  } */

}).on("close",()=>{

  console.log("-- finish --");

})


// const writeStream = fs.createWriteStream('./file-stream.txt',buf);

// fs.promises.readFile("./file.txt")
// .then()
// .catch()



