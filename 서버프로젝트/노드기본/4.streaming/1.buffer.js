const fs = require("fs");
const buffer = Buffer.from("Hello, world!");
// console.log(buf.length);
// 출력하는 방식이 달라 인덱스에 있는 숫자를 10진수로 처리한다.

console.log(buffer.toString());



const buf2 = Buffer.alloc(buffer.length);
//Node.js의 Buffer.alloc() 메서드는 지정된 크기의 빈 버퍼를 생성하는 데 사용됩니다
// 사이즈지정
// console.log(buf2.length);

buffer.copy(buf2)

const newBuf = Buffer.concat([buffer,buf2]);
// concat 복사
console.log(newBuf.toString());


