import React from 'react';
import { combineReducers } from 'redux';
import reduxCount from './reduxCount';
/* 여러개의 reducer를 합치는 기능 */
const rootReducer = combineReducers({
  reduxCount
  // 여러개 reducer 추가.. 
}); 
// 

export default  rootReducer;
