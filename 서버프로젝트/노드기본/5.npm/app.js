/* 
  * 제목 : 사진 폴더 정리 Script
  * 요구사항
  *  1. 동영상(mp4), 이미지(png) 함께 있는 폴더를
  *   각각 동영상과 이미지를 분리하여 관리
  * 2. 동영상 파일은 video 폴더에 
  *  파일복사후 보내기
*/

const fs = require("fs");
const path = require("path");
const process = require("process")

/* const filenames = fs.readdir('/tmp');

const filename = path.basename(__dirname + path.sep)
// path 경로와 파일이름을 가져온후 확장자명이 png라면
console.log(filename); */
// path.dirname(__dirname)
// console.log(__dirname + path.sep + "all" + );


// let copy = fs.copyFile("./all/test1.png")
// let copy = fs.copyFile(`./all/test1.png`)

// fs.appendFile("./img", copy)



// fs.promises.writeFile("./all/test2.png", "dfafasfd");
// fs.promises.writeFile("./all/test1.mp4", "dfafasfd");
// fs.promises.writeFile("./all/test2.mp4", "dfafasfd");

// if(path.join(__dirname,"all","png")){

//   fs.promises.mkdir("./img")
  
// }
// if(path.join(__dirname,"all","mp4")){
// }

// fs.promises.mkdir("./video")



// 실행하는 명령어의 매개변수를 받아 workingDir로 설정하여
// 하위 폴더로 video, capture 폴더 생성


const folder = process.argv[2];
// const workingDir = process.cwd();
const workingDir = path.join(process.cwd(), folder)
const newVideoFile = path.join(process.cwd(), folder,"./video1.mp4")
const newImgFile = path.join(process.cwd(), folder,"./img1.png")
const videoDir = path.join(workingDir,"video")
const captureDir = path.join(workingDir,"capture")


if(!fs.existsSync(workingDir)) {
  fs.mkdirSync(workingDir);
}
if(!fs.existsSync(videoDir)){
    fs.mkdirSync(videoDir)
    //폴더 생성할 때 절대경로로 생성
}
if(!fs.existsSync(captureDir)){
    fs.mkdirSync(captureDir)
}

fs.promises.writeFile(newVideoFile, "dfafasfd");
fs.promises.writeFile(newImgFile, "dfafasfd");
//현재 경로의 모든 파일을 읽음
fs.promises.readdir(workingDir)
.then((files)=>{
  // console.log(files);
  // return files
  fileCheck(files)
})
.catch(console.error)



function fileCheck(files){

  files.forEach(file=>{
    //파일 확장자 분리
    //if 확장자 ==.mp4

    // console.log(file);
    if(isVideoFile(file)){
      //video폴더로 파일 이동
      move(file,videoDir);

    }else if(isImgFile(file)){
      move(file,captureDir);
    }

  })
  
}


function isVideoFile(files){

  // path.extname(files)
  
  const fileObject = path.parse(files)
  // console.log(fileObject);
  if(fileObject.ext === ".mp4"){
    return true;
  }  

  // if(fileObject.base)


  // console.log(path.extname(files));


}

function isImgFile(files){

  const fileObject = path.parse(files)
  if(fileObject.ext === ".png"){
    return true;
  }  

}

function move(file,targetDir){

  // fs.rename(workingDir+"/"+file,targetDir+file)
  const oldPath = path.join(workingDir,file);
  const newpath = path.join(targetDir,file);
  fs.promises.rename(oldPath,newpath)
  .then(console.log("성공"))
  .catch(console.error)

}








// console.log(path.extname(path.join(__dirname,"all","mp4")));






