import * as signupRepository from "../repository/dwitterRepository.js";
import bcrypt from "bcryptjs";


export async function signupCreate(req,res){
  
  const {id,password,name,content} = req.body
  // 값이 많을경우를 생각해 params라는 이름의 배열을 생성해서 넘김
  const hashPass = bcrypt.hashSync(password,10);

  const params = [id,hashPass,name,content];
  // 암호화작업
  //  $2a$10$KtlYrvRJQyIJGUKT390DEusfc7FcGhRHPWHWuiF3yVkPEuRlRpL56
  // 앞의 4자리가 어떤 알고리즘을 사용했는지 알려주는 코드이다. (현재는 해쉬알고리즘을 사용)
  // hash형태로 암호화하는데 걸리는 시간을 cost라고 한다. (위 코드에서는 10)
  // 10 뒤에 있는 코드를 기준으로 반으로 나뉘어서 hash 64bit / hash 64bit  
  // 앞부분은 sort , 뒷부분은 패스워드를 hash로 바꾼 값이다.
  // sort는 암호화할 때 랜덤으로 추가하는 문자이다. (10자리를 랜덤으로 만들어서 넣음)
  // sort로 해킹하는 시간을 오래 걸리게끔 만들어준다.
  // 안정적인 sort의 자리수는 8~10자리수가 적당하다.
  // 단방향으로 암호화하는 방식이다. (암호화(인코딩)된 값을 다시 디코드(원패스워드)로 가져올 수 없다.)
  // 예전에는 비밀번호 찾기 방식이였다가 최근 비밀번호 초기화 방식으로 많이 바뀌었다.

  const result = await signupRepository.signupCreate(params);

  if(result === "success"){

    res.redirect('/dwitter')

  }

}



