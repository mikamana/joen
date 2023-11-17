import { useCallback, useState } from 'react';
import './App.css';

// function UseCallback() {

//   let [count, setCount] = useState(0);

//   // useEffect를 사용하지 않고 바로 setInterval을 호출하게되면 문제사항
//   // 최초 마운트시에 무한 반복하여 setInterval을 실행하고, setCount 함수를 호출한다.
//   //최초 마운트시 한번만 실행하도록 만들어주어 무한루프가 되는 문제를 해결한다.

//   const handlerCounter = useCallback(() => {

//     setInterval(() => {

//       setCount((count) => count + 1);

//     }, 2000);

//   }, [])
//   //또는 다음과 같이 useEffect() Hook을 useCallback() Hook을 사용하여 래핑할 수도 있습니다.
//   //useCallback() Hook은 콜백 함수를 컴포넌트의 렌더링과 함께 업데이트합니다.
//   //useCallback 훅은 함수를 기억(메모이제이션)하고, 해당 함수가 변경될 때만 새로운 함수를 생성하는 React 훅입니다.
//   //이 훅은 주로 성능 최적화에 사용되며,
//   //의존성 배열을 통해 함수가 의존하는 값들을 지정할 수 있습니다.
//   //

//   return (
//     <>
//       <h1>setTimer</h1>
//       <button onClick={handlerCounter}>시작</button>
//       <p>{count}</p>
//     </>
//   );

// }

function UseCallback() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handlerCounter = useCallback(() => {
    // 이미 실행 중인 경우 중복 실행 방지
    if (intervalId) {
      return;
    }

    const id = setInterval(() => {

      setCount((prevCount) => prevCount + 1);

    }, 2000);

    // setInterval ID 저장
    setIntervalId(id);
  }, [intervalId]); // intervalId가 변경될 때만 useCallback이 새로운 함수를 생성하도록 의존성 배열에 추가

  return (
    <>
      <h1>setTimer</h1>
      <button onClick={handlerCounter}>시작</button>
      <p>{count}</p>
    </>
  );

}

export default UseCallback;
