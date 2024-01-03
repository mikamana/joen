import React from 'react';
import { useSelector } from 'react-redux';
import { getInputName } from '../module_redux/reduxReselector';
import Child3 from './Child3';

export default function Child2() {

  const rname = useSelector(getInputName);



  return (
    <>
      <h1>[Child2]name : {rname.inputName}</h1>
      <Child3 />
    </>
  );
}

