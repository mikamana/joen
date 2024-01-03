import React from 'react';
import { createSelector } from 'reselect';

const getName = (state) => state.reducer.name;
const getAge = (state) => state.reducer.age;
const getNickname = (state) =>state.reducer2.nickname;
const getInput = (state) =>state.reducer3.inputName;

/* reducer 함수의 state값 가져오기 */
export const getPersonData = createSelector(
  [getName,getAge,getNickname],
  (name,age,nickname)=>({
    name,age,nickname
  })
);

export const getPersonName = createSelector(

  [getName],
  (name)=>({
    name    
  })

);

export const getInputName = createSelector(

  [getInput],
  (inputName)=>({
    inputName
  })

)
