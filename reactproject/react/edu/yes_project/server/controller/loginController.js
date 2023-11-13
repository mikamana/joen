import * as yesRepository from "../repository/yesRepository.js";
import bcrypt from "bcryptjs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDirectoryPath = path.dirname(__dirname);
// module 방식으로 현재 경로 가져오는 방법
const pathMember = path.join(parentDirectoryPath + "/template");

export async function loginPage(req,res){

  const {id,password} = req.body

  // const token = await createToken(id);

  // console.log("token =>"+token);

  const dpass = await yesRepository.createToken(id);
  // password 데이터 받아옴
  const result = await bcrypt.compare(password,dpass.password);
  // 패스워드 비교
  if(result===true){

    res.sendFile(pathMember+"/login.html")

    // res.redirect("/BestSeller")

  }

}

// function createToken(id){

//   return jwt.sign({id:id}, '4yJZ_30U[;+K')
//   // 토큰 생성
// }