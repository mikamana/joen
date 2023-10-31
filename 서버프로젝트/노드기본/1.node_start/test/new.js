const fs = require("fs");
const path = require("path");
const process = require("process");

// 기존에 png 이미지파일과 mp4 파일을 구분지어 새로운 폴더에 넣어주는 프로그램
// 1. 파일과 폴더를 생성
//    1-1 현재 경로에 폴더와 파일을 생성해야함 process.cwd() 사용해서 경로확인후
//    1-2 폴더는 fs.mkdirSync 사용해서 생성
//    1-3 현재 경로에 폴더가 있다면 생성되지않게 조건 작성 existsSync 사용
// 2. 확장자명에 따라서 폴더에 넣을 파일을 구분
//    2-1 폴더안 모든 파일들을 찾아야함 readdir
//    2-2 모든 파일들 중에서 확장자 찾기 process.ext
//    2-3 찾은 확장자명이 조건에 맞다면 실행하는 기능(폴더에 옮기기)
// 3. 구분된 파일을 새로운 폴더에 옮기기
//    3-1 fs.renameFile 메서드를 사용하여 경로를 찾아 옮기기
// 4. 파일을 실행할 경우 실행할 때 입력한 매개변수를 받아 그 매개변수를 폴더명으로 한 폴더를 process로 찾아서 생성
const folder = process.argv[2];
//실행한 두번째 매개변수 받는 프로퍼티
const workingDir = path.join(process.cwd(),folder)
//받은 매개변수의 이름을 가진 폴더를 현재 경로에 추가로 생성한다. 
// const workingDir = process.cwd();
const newVideoFile = path.join(process.cwd(), folder,"video1.mp4")
const newImgFile = path.join(process.cwd(), folder,"img1.png")
//파일생성
const videoDir = path.join(workingDir,"video")
const captureDir = path.join(workingDir,"capture")

if(!fs.existsSync(workingDir)){

  fs.mkdirSync(workingDir);

}

if(!fs.existsSync(videoDir)){
  // 경로에 만드려는 폴더가 없으면  실행
  fs.mkdirSync(videoDir);
}
if(!fs.existsSync(captureDir)){
  // 경로에 만드려는 폴더가 없으면  실행
  fs.mkdirSync(captureDir);
}

fs.promises.writeFile(newVideoFile, "dfafasfd");
fs.promises.writeFile(newImgFile, "dfafasfd");

fs.promises.readdir(workingDir)
// 경로안에 모든 파일 찾아서 읽기
.then((file)=>{
  // file을 외부에서 사용하기위해 함수를 호출
  fileCheck(file);
  // console.log(file);
}).catch(console.error)

function fileCheck(files){
  files.forEach(file=>{
    if(isVideoCheck(file)){
      move(file, videoDir)
      // 받은 값이 true이면 실행
    }else if(isImgCheck(file)){
      move(file, captureDir)
    }
  })
}

function isVideoCheck(files){
  const fileObject = path.parse(files)
  if(fileObject.ext===".mp4"){
    return true
  }
}

function isImgCheck(files){
  const fileObject = path.parse(files)
  if(fileObject.ext===".png"){

    return true
  }
}

function move(file, name){

  const PathCurrent = path.join(workingDir,file)
  const PathNext = path.join(name,file)
  fs.promises.rename(PathCurrent,PathNext)
      .then(console.log("성공"))
      .catch(console.error);

}




