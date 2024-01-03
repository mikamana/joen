import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputName } from '../module_redux/reduxReselector';

export default function Child3() {

  // 로직 구현

  const inputName = useSelector(getInputName)

  const fnChange = (e) => {

    // setInfo(e.target.value)
    dispatch({ type: 'input', inputName: e.target.value })

  }

  const dispatch = useDispatch();

  return (
    <>
      <h1>[Child3]name : {inputName.inputName}</h1>
      <input type="text" name="name" onChange={fnChange} value={inputName.inputName} />
      {/* <button type='button' onClick={() => {

        dispatch({ type: info })

      }}>전송</button> */}
    </>
  );
}

