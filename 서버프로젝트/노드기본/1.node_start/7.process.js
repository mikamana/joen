const process = require("process");

console.log(process.execPath);//프로세스 파일 경로
console.log(process.version);//프로세스 버전
console.log(process.pid); // 프로세스 아이디
// console.log(process.ppid); // 프로세스 부모의 아이디
console.log(process.platform); //윈도우버전
// console.log(process.env); // 모든 환경변수
// console.log(process.uptime()); 
// console.log(process.cwd()); //현재 경로 출력
// console.log(process.cpuUsage()); 
// 프로그램이 실행되는 개별적인 실행공간
// 실행경로제공

/* function timeOut(){
  return setTimeout(() => {
    console.log("3초가 지났습니다.");
}, 3000);
} */
/* setTimeout(() => {
    console.log("3초가 지났습니다.");
}, 3000);
// console.log(timeOut());

process.nextTick(()=>{
  console.log("nextTick!!");
}) */
// nextTick(콜백함수); --> Non-Blocking
// nextTick 함수는 비동기 함수중 우선순위가 가장높아서 제일 먼저 출력됌
// 비동기 함수중에 제일 먼처 실행되어야하는 것이 있다면 nextTick사용







