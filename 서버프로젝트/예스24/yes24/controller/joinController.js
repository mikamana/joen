import * as yesRepository from "../repository/yesRepository.js";
import bcrypt from "bcryptjs";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDirectoryPath = path.dirname(__dirname);
// module 방식으로 현재 경로 가져오는 방법
const pathMember = path.join(parentDirectoryPath + "/template");

export async function joinPage(req, res){

  const {name,id,password} = req.body

  const hashPass = bcrypt.hashSync(password,10);

  const params = [name,id,hashPass];

  const result = await yesRepository.joinPage(params)
  
  if(result==="success"){
    res.sendFile(pathMember+"/join.html")
    // res.redirect("/BestSeller");

  }
  // 회원가입 기능하는 컨트롤러 생성
  // 생성하는 이유 
  // controller는 MVC 패턴중 C에 해당한다.
  // 1. 기능별로 분리해서 한 눈에 보기 쉽다. (가독성이 좋음)
  // 2. 유지보수에 용이하다.
  // 3. 컨트롤러를 따로 만드는 것은 각 컴포넌트가 하나의 역할
  // 또는 책임을 가지도록 하는 소프트웨어 공학 원칙 중 하나인 SRP를 준수하는 데 도움이 된다.
  // 컨트롤러는 다양한 뷰와 모델과 상호 작용할 수 있으며, 이를 통해 코드 재사용성이 향상된다.
  // 같은 컨트롤러를 여러 뷰에서 재사용할 수 있으므로 중복 코드를 줄이고 생산성을 향상시킵니다.
  // 새로운 기능을 추가하거나 기존의 기능을 수정할 때 컨트롤러를 변경할 수 있으며, 모델 및 뷰에 영향을 미치지 않습니다. 




}