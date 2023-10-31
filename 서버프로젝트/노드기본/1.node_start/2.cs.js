/* console.log("log"); // 개발
console.info("info"); // 정보, 사용법..
console.warn("warn"); // 경고
console.error("error");// 에러
console.assert(2 === 3, "동일하지않음");  
// console.clear("clear"); // 로그 삭제 

//print object

const student = {name: "홍길동", age: 20, color:{default: "red", sub:"green"}}
console.log(student);
console.table(student);
console.dir(student, {showHidden:true, color:false, depth:0});

 */
/* //time
console.time("for loop");
for(let i=0; i<10; i++){
  i++;
}
console.timeEnd("for loop");
// time, timeEnd 요소가 실행되는 시간을 계산 */

//trace

const f1 = () =>{

  f2();

}

const f2 = () =>{

  f3();

}
const f3 = () =>{

  console.log("function 3!!");
  console.trace();
  
}

f1()