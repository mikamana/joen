import React from 'react';

export default function CountItemRedux({ count, total, onPlus, onMinus, onReset }) {

  return (
    <>
      <h1>Count : {count}</h1>
      {/* <h2>Number : {number}</h2> */}
      <p>
        <button type='button' onClick={onPlus}>Plus</button>
        <button type='button' onClick={onReset}>Reset</button>
        <button type='button' onClick={onMinus}>Minus</button>
      </p>
      <p>total : {total}</p>


    </>
  );
}

