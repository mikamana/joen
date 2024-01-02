import React from 'react';

const rname = {name : '홍길동', age:25};

export default function reducer(state=rname,action) {
  
  // rname을 바꿔주는 함수 action

  switch(action.type){

    case 'increment' : return {...state, age : state.age +1};
    case 'reset' : return {...state, age : rname.age};
    case 'decrement' : return {...state, age : state.age -1};
    default : return state

  }


}



