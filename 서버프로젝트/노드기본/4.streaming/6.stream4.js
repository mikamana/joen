const fs = require("fs");

const readStream = fs.createReadStream("./file5.txt",{highWaterMark:16});
const writeStream = fs.createWriteStream("./new_file.txt");

readStream.on("data",(chunk)=>{

  writeStream.write(chunk);

}).on("close",()=>{

  console.log("--fin");

})



