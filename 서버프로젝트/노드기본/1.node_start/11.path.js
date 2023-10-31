const path = require("path")

/* console.log(__dirname); // global에 있는 디렉토리
console.log(__filename); //global에 있는 파일

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//윈도우 : c: \dev\node\code\test.js
//맥,리눅스 : /users/test/

path.dirname + '/image'
// 이런식으로 사용 X

//basename
console.log(path.basename(__filename));

//파일이름
console.log(path.basename(__dirname));

//dirname
console.log(path.dirname(__dirname));

//extension
console.log(path.extname(__filename));
//확장자이름

//parse */



const parsed = path.parse(__filename); //오브젝트 형태로 출력
console.log(parsed);
// parsed.root;
console.log(parsed.name);
const str = path.format(parsed); //string 형태로 변환
console.log(str);

// normalize
//외부에서 입력을 받아 사용할 떄
/* console.log(path.normalize('.folder////////sub'));

//join
console.log(__dirname + `/`+"image");
//위처럼 사용하는 것을 권장하지않음
console.log(__dirname + path.sep + 'image');
console.log(path.join(__dirname,"image","test")); */
//시스템에 있는 path 경로를 가져오기 때문에 이 방법(API에 있는 명령어)을 사용 권장





