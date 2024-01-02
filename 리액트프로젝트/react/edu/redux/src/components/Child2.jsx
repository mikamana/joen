import React from 'react';
import { useSelector } from 'react-redux';
import { getPersonData } from '../module_redux/reduxReselector';

export default function Child2() {

  const rname = useSelector(getPersonData);

  return (
    <>
      <h1>[Child2]name : {rname.name}</h1>
      <h1>[Child2]age : {rname.age}</h1>
    </>
  );
}

