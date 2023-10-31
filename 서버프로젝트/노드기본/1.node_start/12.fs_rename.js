const fs = require("fs");

//fs에서는 3가지 방식으로 제공
// promise : rename(old, new)
//callback : rename(old,new,callback)
// synchoronous : renameSync(old, new)

/* try{
  fs.renameSync('./test.txt','./test-new.txt');
  console.log("--rename--");
}catch(error){
  console.log("error입니다.");
}

console.log("---test!!!---"); */

/*   fs.rename("./test-new.txt",
  "./new-test.txt",
  (error)=>{
    console.log("error");
  }) */

fs.promises.rename("./test.txt","./test-new.txt")
.then(()=>
  console.log("성공")
)
.catch(console.error())
.finally(()=> console.log('-- terminate --'))






