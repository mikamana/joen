import React from 'react';
import { combineReducers } from 'redux';
import reducer from './reducer';
import reducer2 from "./reducer2";
import reducer3 from "./reducer3";
import countReducer from './countReducer';


/* function reducer(state=rname,action){
  // 첫번째 인자 = 현재상태
  // 두번째 인자 = 컴포넌트 액션처리변수
  return state
}; */

/* 여러개의 reducer를 합치는 기능 */
const rootReducer = combineReducers({
  reducer,
  reducer2,
  reducer3,
  countReducer
  // 여러개 reducer 추가.. 
}); 
// 

export default  rootReducer;
