import React, { useReducer, useState } from 'react';

export default function MyCount() {

  const [count, setCount] = useState(0);

  // const [state, dispatch] = useReducer(reducer,0,)

  const handleClick = (type) => {

    if (type === 'plus') {

      setCount(count + 1);

    } else {

      setCount(count - 1);


    }

  }




  return (
    <>
      <h1>Count : {count}</h1>
      <p>
        {/* <button type='button' onClick={() => setCount((count) => count + 1)}> */}
        <button type='button' onClick={() => {

          handleClick('plus')

        }}>
          Plus
        </button>
        <button type='button' onClick={() => {

          handleClick('minus')


        }}>
          Minus
        </button>
      </p>
    </>
  );
}

