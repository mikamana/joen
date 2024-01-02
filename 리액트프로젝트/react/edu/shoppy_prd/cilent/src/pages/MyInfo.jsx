import React, { useReducer, useState } from 'react';
import ageReducer from '../reducer/ageReducer';

export default function MyInfo() {

  const [state, dispatch] = useReducer(ageReducer, { name: 'Taylor', age: 42 });

  const handleChange = (e) => {

    dispatch({ type: 'change', nextName: e.target.value })

  }

  return (
    <>
      <input type="text" value={state.name} onChange={handleChange} />
      <br />
      <button onClick={() => dispatch({ type: 'inc_age' })}>Increment age</button>
      <p>
        Hello! {state.name} You are {state.age}
      </p>
    </>
  );

}

