const fs = require("fs").promises;
const os = require('os')

//test.txt 파일을 읽어 콘솔에 출력

fs.readFile("./test.txt", 'utf-8')
.then((data)=>{
  console.log(data)
})
.catch(console.error)

// .txt 파일에 문자열 덮어쓰기
// fs.writeFile('./test-new.txt','hellow ~ abcdefg')
// .then(console.log("--write--"))
// .catch(console.error())
// readFile보다 우선순위가 높아서 먼저 실행된다.

// fs.appendFile("./test-new.txt", `dddd`)
// .then(console.log("go"))
// .catch(console.error)

fs.appendFile("./test-new.txt", `asdf${os.EOL}`)
// os.EOL는 윈도우,맥 둘 다 줄바꿈 가능 (호환성)
.then(console.log("go"))
.catch(console.error)
// test.txt 파일을 복사하기
fs.copyFile('./test.txt','./test-copy.txt')
// .then()
.catch(console.error);

//'sub-folder' 생성
fs.mkdir("sub-folder")
.then(console.log)
.catch(console.error);



