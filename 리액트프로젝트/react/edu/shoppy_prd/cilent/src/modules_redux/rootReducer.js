import React from 'react';
import { combineReducers } from 'redux';
import reduxCount from './reduxCount';
import reduxCartList from "./reduxCartList";
import reduxQtyList  from './reduxQtyList';
/* 여러개의 reducer를 합치는 기능 */
const rootReducer = combineReducers({
  reduxCount,
  reduxCartList,
  reduxQtyList
  // 여러개 reducer 추가.. 
}); 
// 

export default  rootReducer;
