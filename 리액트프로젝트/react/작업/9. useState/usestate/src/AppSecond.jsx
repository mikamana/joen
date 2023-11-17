import { useEffect, useState } from 'react';
import './App.css';

function AppSecond() {

  let [count, setCount] = useState(0);

  setInterval(() => {

    setCount((count) => count + 1)

  }, 3000)

  // useEffect를 사용하지 않고 바로 setInterval을 호출하게되면 문제사항
  // 최초 마운트시에 무한 반복하여 setInterval을 실행하고, setCount 함수를 호출한다.
  //최초 마운트시 한번만 실행하도록 만들어주어 무한루프가 되는 문제를 해결한다.

  useEffect(() => {

    setInterval(() => {

      setCount((count) => count + 1)

    }, 2000)

  }, [])
  // handlerCounter 함수를 실행되자마자 호출하고싶을 때는 useEffect로 감싸서 최초 마운트 될 때만 실행시켜 무한루프를 방지한다

  return (
    <>
      <h1>setTimer</h1>
      <button onClick={handlerCounter}>시작</button>
      {/* <button onClick={handlerStopCounter}>중지</button> */}
      <p>{count}</p>
    </>
  );

}

export default AppSecond;
