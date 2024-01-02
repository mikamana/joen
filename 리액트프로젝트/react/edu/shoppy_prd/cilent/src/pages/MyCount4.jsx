import React, { useReducer, useState } from 'react';
import countReducer from '../reducer/countReducer';

export default function MyCount() {

  const [count, countDispatch] = useReducer(countReducer, 0);
  // 값은 state와 dispatch로 받아서 사용한다.
  // state는 우리가 사용할 state 값
  // dispatch는 action을 발생시키는 함수라고 생각하면 된다.
  // useReducer의 첫번째 인자는 reducer 함수이다.
  // useReducer의 두번째 인자는 초기값을 설정한다.

  console.log(count);

  return (
    <>
      <h1>Count : {count}</h1>
      <p>
        <button type='button' onClick={() => { countDispatch({ type: 'plus' }) }}>Plus</button>
        <button type='button' onClick={() => { countDispatch({ type: 'reset' }) }}>Reset</button>
        <button type='button' onClick={() => { countDispatch({ type: 'minus' }) }}>Minus</button>
      </p>
    </>
  );
}

