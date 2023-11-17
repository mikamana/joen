import { useEffect, useState } from 'react';
import './App.css';

function ClearInterval() {

  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(null);


  useEffect(() => {
    handlerCounter()
  }, [])
  // handlerCounter 함수를 실행되자마자 호출하고싶을 때는 useEffect로 감싸서 최초 마운트 될 때만 실행시켜 무한루프를 방지한다.

  const handlerCounter = () => {
    const time = setInterval(() => { setCount((count) => count + 1) }, 2000);
    setTimer(time);
    //
  }
  //setInterval을 사용하여 2초에 한번씩 count가 1씩 증가하도록 작업 후 clearInterval을 하기 위해 setInterval을 변수에 담는다. 

  const handlerStopCounter = () => {
    clearInterval(timer)
  }
  //중지버튼을 클릭하면 clearInterval 되도록 작업

  return (
    <>
      <h1>setTimer</h1>
      <button onClick={handlerCounter}>가나</button>
      <button onClick={handlerStopCounter}>중지</button>
      <p>{count}</p>
    </>
  );

}

export default ClearInterval;
