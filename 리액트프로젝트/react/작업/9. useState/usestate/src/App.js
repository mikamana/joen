import { useEffect, useState } from 'react';
import './App.css';

function App() {

  let [count, setCount] = useState(0);

  // setState("33")
  // 앱을 실행할 때 useState의 setState를 바로 호출하면 무한루프가 발생한다.
  // useState는 상태를 변경시키는 Hook이기 때문에 setState를 그냥 호출하면 계속 상태를 변경시키기 때문에
  // 다른 작업을 통해 계속 상태를 변경시키지 않게 만들어 주어야한다.

  useEffect(() => {

    setCount((count) => count + 1);

  }, [])

  //useEffect는 렌더링될 때 실행되는 Hook이다
  //useEffect는 최초 Mount될 때, 렌더링될 때, unMount될 때 실행할 수 있다.
  //위의 setState의 무한루프를 해결하기 위해서 최초 렌더링 될때 한번만 실행하도록 만드는 작업을 해주었다.
  //useEffect의 두번째 인자는 배열 형태이며, 의존성 배열로 빈 배열이 들어가면 최초 렌더링 될 때 실행하는 훅으로 기능한다.
  //두번째 배열 안에는 검사하고자 하는 특정 값이 들어갈 수도 있다.
  //만약 배열을 생략한다면 useEffect안에 콜백함수가 렌더링 될 때마다 실행된다.
  //deps에 값이 들어가면 해당 값(컴포넌트)이 업데이트 될 때 useEffect의 콜백함수가 실행된다. 



  console.log(count);

  // useEffect(() => {

  //   setCount((count) => count + 1);

  // }, [state])

  // 해당 useEffect는 최초 마운트가 된 경우 한번 실행하고, 
  // state가 변경될 때 한번 실행하여 총 두 번을 실행한다.
  // 처음 마운트되어 setCount를 한번 호출하고 count에 +1을한다.
  // useEffect가 두번 호출되는 현상이 생기는 경우는
  // React에는 strict 모드가 존재하는데, 이 옵션이 켜져있으면 개발 모드일 경우 두번 렌더링하게된다.
  //strict 모드는 안전하지 않은 수명 주기, 레거시 API 사용 및 기타 여러 기능을
  //식별하는 데 도움을 준다고 하니 특별한 경우가 아니면 비활성화를 할 필요는 없어보입니다!



  return (
    <>
      <h1>Use State,Use Effect</h1>
      <button>use = {count}</button>
    </>
  );


}

export default App;
