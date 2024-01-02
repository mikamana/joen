import React from 'react';
import { createSelector } from 'reselect';

const getName = (state) => state.reducer.name;
const getAge = (state) => state.reducer.age;

/* reducer 함수의 state값 가져오기 */
export const getPersonData = createSelector(
  [getName,getAge],
  (name,age)=>({
    name,age
  })
);

