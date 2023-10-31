const { nextTick } = require("process");

console.log("code 1");

setTimeout(() => {
  console.log("setTimeout!");
}, 0);

console.log("code 2");

setImmediate(()=>{
  console.log("setImmediate!");
});

console.log("code 3");

process.nextTick(()=>{
  //nextTick은 node에서만 사용
  //우선순위 가장 높음
  console.log("nextTick!");
})

