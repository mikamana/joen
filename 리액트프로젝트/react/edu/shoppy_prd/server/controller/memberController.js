import * as repository from '../repository/memberRepository.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * 회원 아이디 중복체크
 */
export async function getIdCheck(req, res){
  const id = req.params.id;
  const result = await repository.getIdCheck(id);
  res.json(result); //{data : {cnt:1}}
}

/**
 * 회원 로그인
 */
export async function getLogin(req, res){
  const {id, pass} = req.body;  
  const result = await repository.getLogin(id);
  result.login_result = false;
  // let token = null;

  if(result.cnt === 1){    
    if(await bcrypt.compare(pass, result.pass)){      
      result.login_result = true;  //로그인 성공
      //jwt 토큰 생성
      const token = jwt.sign({id : id}, '58Ua|!{@>3{*');
      result.token = token;
      // console.log(`result---> ${JSON.stringify(result)}`);
    }
  }
  // console.log(result);
  res.json(result); //토큰 전송

}

/**
 * 새로운 회원 등록
 */
export async function insertMember(req, res){
  const {name,id, pass, phone} = req.body;
  const hashPass = bcrypt.hashSync(pass, 10);
  const result = await repository.insertMember({name,id,hashPass,phone});
  res.json(result); //{data : 'ok'}
}