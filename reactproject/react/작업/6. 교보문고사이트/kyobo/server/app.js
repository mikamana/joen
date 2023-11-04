import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// server 폴더 경로가져오기
const dirname = path.join(__dirname, '..');
// server폴더의 상위폴더
const client = path.join(dirname, 'client/bulid');
//public index.html파일은 리액트에서 만든 태그들이 추가되지않은상태라
//최종적으로 build폴더에 있는 html을 불러와야함
const indexHtml = path.join(client, 'index.html');

console.log(indexHtml);

app.use(express.static(client));
// 경로안에있는 파일을 정적파일로 저장하고 사용해야함

app.get("/", (req, res) => {

    res.sendFile(indexHtml)

})

app.get("*", (req, res) => {

    res.sendFile(indexHtml)

})
//별표 * 라는 것은 모든 문자라는 뜻입니다.
//"고객이 URL란에 아무거나 입력하면 걍 리액트 프로젝트나 보내주셈"이라는 뜻인데 이렇게 하면 리액트 라우팅 잘됩니다.
//이 코드는 항상 가장 하단에 놓아야 잘됩니다. 

app.listen(3000, () => {

    console.log("server success~!!");

});


//React 앱을 빌드하면, 일반적으로 해당 빌드는 자동으로 업데이트되지 않습니다. 즉, build 폴더는 사용자가 명시적으로 새로운 빌드를 실행하지 않는 이상 자동으로 변경되지 않습니다.
//보통 React 앱을 빌드하려면 명령어를 실행해야 합니다. 기본적으로 React의 빌드 명령어는 다음과 같습니다:

//API 엔드포인트 설정 알아야함