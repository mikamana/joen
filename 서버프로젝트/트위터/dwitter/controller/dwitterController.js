import ejs from "ejs";
import * as dwitterRepository from "../repository/dwitterRepository.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import jwt from "jsonwebtoken";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDirectoryPath = path.dirname(__dirname);
const pathMember = path.join(parentDirectoryPath + "/template");
// module 방식으로 현재 경로 가져오는 방법
// router.use(express.static(__dirname));
// const pathMember = path.join(parentDirectoryPath + "/template");

/**getAll**/
export async function getAll(req, res){
  // static페이지는 ul로 간다는 뜻
  // 다이나믹 페이지는 서버를 사용해서 작업하겠다는 뜻
  // 하루에 하나 토픽을 정해서 작업하기
  const rows = await dwitterRepository.getAll();
  //index.ejs(틀) + 동적 데이터 가져옴
  // const sql = 'select id,name,left(date,10) as date,content from dwitter';
  // left(date,10)를 그대로 쓰게되면 left(date,10) 이라는 함수명으로 찾게되어 alias를 주어야 정확히 인식한다.
  // *로 하면 컬럼명 인식못함

      ejs.renderFile("./template/index.ejs", {list:rows})
      .then((data)=> res.end(data))
      // rows는 배열이다.
      // 넘겨줄때는 list라는 이름을 주어 넘겨줌
      // 배열안에 데이터들을 하나하나 가져와서 리턴

};

/** create **/
export async function create(req, res){

  const {id,name,content} = req.body
  const result = await dwitterRepository.create(id,name,content);
  if(result === 'success'){
    res.redirect('/dwitter'); 
  }
  // const sql = "insert into dwitter(id,name,date,content) values(?,?,curdate(),?)";
  // ?로 처리해서 하는 방식을 prepare statement 라고함
  // 왜냐하면 정보보안에서 넘어가는 데이터를 쿠킹함 > 쿠킹시 ?가 있으면 데이터가 감춰지는 역할
  // ?는 아직 확정되지않은 데이터를 표시해주기 위해 넣음
  // const params = [id,name,content];
  // params로 맵핑
  // sql로 넘길 때는  반드시 배열로 넘긴다.
  // ?가 들어가면 paramiter가 필요하다는 의미
  // sql을 인자로 넘기면 values의 ? 값을 params 배열 순서대로 넣는다.
  // insert,update,delete는 출력할 수 없기 때문에 err만 받아서 사용
};

/** getDwitter **/
export async function getDwitter(req, res){

  const id = req.params.id;
  const rows = await dwitterRepository.getDwitter(id);
    //? 자리에 값이 여러개가 들어가야하는 상황이면
    // params 자리에 배열 형태로 넣어야함 
      ejs.renderFile("./template/index.ejs", {list:rows})
      .then((data)=> {
        res.end(data)
      })

  };
  
  export async function update(req, res){

    //로그인한 회원이 쓴 dwitter 게시글만 업데이트 가능하도록 체크
    // 1. 토큰 가져오기
    const token = req.cookies.x_auth;
    try{
      const {id,content} = req.body;
      const verify = jwt.verify(token,'7\zxS6B~60q3');
      console.log(verify);
      console.log(id);

      if(id===verify.id){
        //null값이 생기지않을 가능성이 높은 값을 앞에 둔다.
        const result = await dwitterRepository.update(id,content);
  
        if(result==='success'){
          res.status(204).send('update success!!')
        }
        
        //회원제게시물생성
      }else{

        res.status(400).send('update fail')

      }
    }catch(error){
      console.log(error);
    }

  
  };

  /**  remove  **/
  export async function remove(req, res){

    const {id} = req.body;
    const result = await dwitterRepository.remove(id)
    
    if(result === 'success'){
      res.status(204).send('delete success!!');
    }
  
  };


  