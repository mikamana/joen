// 1초에 정수를 하나씩 증가하여 출력하는 함수 생성

let num = 0;
let interval;
const plus = (num,sec) =>{

  interval = setInterval(()=>{
    num ++ 
    // console.log(num);
  },sec)

}

plus(num,1000)

setTimeout(() => {

  clearInterval(interval);

}, 6000);

console.log(num);
    






