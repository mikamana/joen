
// 운영체제 정보
const os = require('os')
// package.json에서 type="module"로 작성해서 자바스크립트 형식으로 사용되어 os객체는 사용하지못했음

// console.log(os.EOL === '\n'); // 맥, 리눅스
// console.log(os.EOL === '\r\n'); // 윈도우

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.type());
console.log(os.cpus());
console.log(os.uptime());
// console.log(os.EOL);



