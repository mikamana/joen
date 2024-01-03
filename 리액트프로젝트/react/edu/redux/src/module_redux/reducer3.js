import React from 'react';

const rname = {inputName : '아무개'};

export default function reducer3(state=rname,action) {
  
  // rname을 바꿔주는 함수 action
  // type을 꼭 넣어야함

    if(action.type !== null){

      return {inputName : action.inputName}

    }


  


}



