import * as joinRepository from  "../repository/joinRepository.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parentDirectoryPath = path.dirname(__dirname);
// module 방식으로 현재 경로 가져오는 방법
// router.use(express.static(__dirname));
const pathMember = path.join(parentDirectoryPath + "/template");

export async function createJoin(req,res){
    
    const {name,id,password,birthday,address_first,address_second,address_third,email,checkbox,phone,recommand} = req.body
    console.log(req.body);
    const address = address_first + address_second + address_third;
    const mail = email[0] + '@' + email[1]; 
    const result = await joinRepository.createJoin(name,id,password[0],birthday,address,mail,checkbox,phone,recommand);

    if(result === "success"){
      res.sendFile(pathMember + "/join.html");
    }

}