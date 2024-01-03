import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonData } from '../module_redux/reduxReselector';

export default function Child1() {

  const rname = useSelector(getPersonData);
  // useSelector를 호출할 떄마다 브라우저에서 스토어로 무조건 보낸다.
  //reselect > 메모해놓은 함수를 호출

  const dispatch = useDispatch();



  return (
    <>
      <h1>[Child1]name : {rname.name}</h1>
      <h1>[Child1]age : {rname.age}</h1>
      <h1>[Child1]nickname : {rname.nickname}</h1>
      <hr />
      <div>
        <button onClick={() => {

          dispatch({ type: 'increment' });

        }}>
          Plus
        </button>
        <button onClick={() => {

          dispatch({ type: 'reset' });

        }}>Reset</button>
        <button onClick={() => {

          dispatch({ type: 'decrement' });


        }}>
          Minus
        </button>
      </div >

    </>
  );
}

