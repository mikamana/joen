import React, { useReducer, useState } from 'react';
import countReducer from '../reducer/countReducer';

export default function CountItem() {

  const [state, countDispatch] = useReducer(countReducer, { count: 0, total: 0 });
  // 값은 state와 dispatch로 받아서 사용한다.
  // state는 우리가 사용할 state 값
  // dispatch는 action을 발생시키는 함수라고 생각하면 된다.
  // useReducer의 첫번째 인자는 reducer 함수이다.
  // useReducer의 두번째 인자는 초기값을 설정한다.
  // 
  const [number, setNumber] = useState(0);

  const handleChangeNumber = (e) => {

    setNumber(parseInt(e.target.value))

  }

  // 누적값만들기
  // count값과 현재값을 더해서 total에 출력



  return (
    <>
      <h1>Count : {state.count}</h1>
      {/* <h2>Number : {number}</h2> */}
      <p>
        <button type='button' onClick={() => { countDispatch({ type: 'plus', number: number }) }}>Plus</button>
        <button type='button' onClick={() => { countDispatch({ type: 'reset' }) }}>Reset</button>
        <button type='button' onClick={() => { countDispatch({ type: 'minus', number: number }) }}>Minus</button>
      </p>
      <p>
        증가치 : <input type="text" name='number' value={number} onChange={handleChangeNumber} />
      </p>
      <p>total : {state.total}</p>
    </>
  );
}

