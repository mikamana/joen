//callback 함수가 동작하는데 걸리는 시간

console.log("timeout Check!");
console.time("timeout 0");
setTimeout(()=>{

  console.timeEnd('timeout 0');
  console.log("setTimeout");

}, 1000); //1초(?)



