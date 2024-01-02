import React from 'react';
import { useSelector } from 'react-redux';
import Child1 from './Child1';
import { getPersonData } from '../module_redux/reduxReselector';
import Child2 from './Child2';

export default function MainRedux() {

  const rname = useSelector(getPersonData)

  console.log(rname);

  return (
    <>
      <h1>[Main]name : {rname.name}</h1>
      <h1>[Main]age : {rname.age}</h1>
      <hr />
      <Child1 />
      <Child2 />

    </>
  );
}

