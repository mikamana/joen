import * as memberRepository from "../repository/memberRepository.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function signUpMember(req,res){

  const {id,name,pass,phone} = req.body

  const hashPass = bcrypt.hashSync(pass,10);
  
  const result = await memberRepository.signUpMember({id,name,hashPass,phone})

  console.log(result);
  if(result==="ok"){

    res.json(result);

  }
  // password 암호화작업
  // cost는 10



}

export async function loginCheck(req,res){

  const {id, pass} = req.body

  const dpass = await memberRepository.loginCheck(id);

  //해쉬로 바뀐 코드만 dpass 값이 인식되는 이유는 비크립트가 단방향방식이라 안되는 것

  dpass.login_result = false;


  if(dpass.cnt === 1){
    //비밀번호 체크
      if(await bcrypt.compare(pass,dpass.pass)){
        dpass.login_result = true; // dpass 객체에 login_result라는 객체를 생성하고 true값을 넣음
        const token = jwt.sign({id:id},'7\zxS6B~60q3')
        console.log(`token--->${token}`);
        dpass.token = token; // dpass 객체에 token넣음

        //jwt 토큰 생성
        //생성해서 브라우저로 바로 보내면 8000번 포트로 보내짐 => 리액트에 넘겨야하기 때문에 서버에서는 토큰만 생성해놓고
        //리액트에서 브라우저로 넘겨야함
      }

    }

  res.json(dpass)

  //code: 'ER_MIX_OF_GROUP_FUNC_AND_FIELDS',
  //errno: 1140,
  //sql: 'select count(pass) as cnt, pass from shoppy_member where id = ?',
  //sqlState: '42000',
  //sqlMessage: "In aggregated query without GROUP BY, expression #2 of SELECT list contains nonaggregated column 'hrdb2019.shoppy_member.pass'; this is incompatible with sql_mode=only_full_group_by"
  //}
  // mysql의 sql모드가 변경이 된 오류이다.

}

/* 회원 아이디 중복체크 */
export async function getIdCheck(req,res){


  const id = req.params.id
  console.log(id);
  const rows = await memberRepository.getIdCheck(id)

  res.json(rows)

}



