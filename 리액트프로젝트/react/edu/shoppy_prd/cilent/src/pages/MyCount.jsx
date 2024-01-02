import React, { useReducer, useState } from 'react';

export default function MyCount() {

  const [count, setCount] = useState(0);

  // const [state, dispatch] = useReducer(reducer,0,)

  const handleClickPlus = (type) => {

    if (count === 10) return false

    setCount(count + 1);

  }


  const handleClickMinus = (type) => {

    if (count === 0) return false

    setCount(count - 1);

  }

  const handleClickReset = () => {

    setCount(0);

  }



  return (
    <>
      <h1>Count : {count}</h1>
      <p>
        <button type='button' onClick={handleClickPlus}>Plus</button>
        <button type='button' onClick={handleClickReset}>Reset</button>
        <button type='button' onClick={handleClickMinus}>Minus</button>
      </p>
    </>
  );
}

