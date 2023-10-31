const fs = require("fs");
const path = require('path')
const writeStream = fs.createWriteStream('./file4.txt',{});

// fs.writeFile("./file5.txt","dddd",()=>console.log("파일생성성공"))
writeStream.write("hello~~\r\n");





