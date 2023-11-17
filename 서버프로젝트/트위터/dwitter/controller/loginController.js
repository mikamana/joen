import ejs from "ejs";
import * as loginRepository from "../repository/loginRepository.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from "bcryptjs";
//패싱 알고리즘 bcrypt
import jwt from "jsonwebtoken";
// import cookie from "cookie-parser";

export async function realTimeLogin(req,res){

  const {id, password} = req.body;
  // 넘어온 pass --> hash 알고리즘 적용
  // db에 저장된 패스워드 가져오기
  // bcrypt.compare();
  // 넘어온 pass와 db에 저장된 패스워드를 compare로 비교한다.
  
  const dpass = await loginRepository.realTimeLogin(id);
    // res.sendFile(pathMember + "/login.html");
    // status를 넣으면 html로 sendFile 이동이 안됌
    // res.status(204).send("dd")
  const result = await bcrypt.compare(password,dpass.password);
  // 암호화가 되어있는 경우는 단방향인지 양방향인지 확인후에 
  // 어떤 모듈을 사용했는지 파악한다.
  // 고전적인 형태의 서버 : wass서버 , c#은 안에 세션을 관리하는 시스템이이다.  메모리에 얹어서 사용하기 때문에 db에 안감
  // 하지만 node는 세션을 관리하는 시스템이 없다. 즉 노드는 서버가아님, 세션을 사용하는 방법을 권장하지않음 -> 토큰을 받아서 사용하는 형태로 구성함
  // 자바스크립트는 jwt 토큰을 json형태로 세션처리하고 로그인처리,관리함
  // 
  console.log(result);

    // 로그인 성공 --> session, JWT(JSON Web Token)
    const token = createToken(id);

    console.log(token);
    // res.cookie('토큰명',토큰,{유효기간, httponly:true} )
    // httponly:true 브라우저에서만 실행할것인지, 디폴트는 false이다.
    res.cookie("x_auth", token, {maxAge:60*60*1000, httponly:true})
    // 60 : ms    

    .status(200).redirect("/dwitter");

}

function createToken(id){

  // 토큰은 별도의 함수로 만든다.
  // return jwt.sign(
  //     {저장할 자료}, '시크릿 코드'        // 토큰에 들어가는 정보
  //     secret0rPrivateKey: // secret code
  //     options?:
  // );

  return jwt.sign(
      {id:id}, '7\zxS6B~60q3'    // 토큰에 들어가는 정보, secret code
  );

}