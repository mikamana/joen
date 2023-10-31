const path = require("path")

console.log(__dirname); // global에 있는 디렉토리
console.log(__filename); // 파일이름
console.log(path.sep); // 경로구분자
console.log(path.delimiter); //환경변수 구분자

console.log(path.basename(__filename));





