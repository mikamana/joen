import './App.css';
import { useEffect, useRef, useState } from 'react';
function App() {

  // let menuRef = useRef(null);
  // menuRef를 레퍼런스로 설정하겠다는 뜻
  // console.log(menuRef.current.offsetHeight);
  // li의 높이값을 받아서 사용할 수 있다.
  // let ulRef = useRef();
  // top좌표를 변경할 ul을 레퍼런스로 정함

  const [topY, setTopY] = useState(0);
  const [currentTop, setCurrentTop] = useState(0);

  let menuRef = useRef();
  // li를 레퍼런스로 잡음 menuRef

  useEffect(() => {

    setCurrentTop(menuRef.current.offsetHeight)

  }, [])

  // let ulRef = useRef();

  const useInterval = (callback, delay) => {

    // let ulRef = useRef(callback);
    // 변경시킬 ul을 레퍼런스로 잡음

    const callbackRef = useRef(callback);
    // console.log(currentTop);
    useEffect(() => {
      callbackRef.current = callback;
    });

    useEffect(() => {

    const timer = setInterval(() => callbackRef.current(), delay);
      return () => clearInterval(timer);

    })

    // ulRef.current.style.top = `-${currentTop}px`;

  }

  // useInterval을 사용하여 일정한 간격으로 top을 업데이트합니다.
  useInterval(() => {

    setTopY((top) => top + currentTop);

    if(topY>=220){

      setTopY(0)

    }


  }, 3000);




  // useEffect(() => {

  //   const timer = setInterval(() => {

  //     setCurrentTop((current) => current + menuRef.current.offsetHeight);
  //     ulRef.current.style.top = `-${currentTop}px`;

  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };

  // }, []);

  // useEffect(() => {
  //   // menuRef.current = document.querySelector(".gnb_list_li");
  //   console.log(menuRef.current.offsetHeight);
  //   setCurrentTop(menuRef.current.offsetHeight)
  //   // ulRef.style.top = { top } + "px";

  //   // setInterval(() => {
  //   //   ulRef.current.style.top = `${currentTop}px`;
  //   // }, 1000);

  // }, []);

  // topReset()

  // function topReset() {

  //   setInterval(() => {

  //     // useEffect(() => {

  //     ulRef.current.style.top = `${currentTop}px`;

  //     // }, [])


  //   }, 2000)

  // }



  /* 
    위 코드는 useEffect() Hook을 사용하여 menuRef 레퍼런스를 초기화하고 offsetHeight 속성을 출력하는 코드입니다.
  
    useEffect() Hook은 컴포넌트의 렌더링에 영향을 미치는 작업을 수행하는 데 사용됩니다. callback 함수의 인자로 전달되는 의존성 배열은 callback 함수가 호출될 때를 결정합니다. 의존성 배열에 포함된 값이 변경되면 callback 함수가 다시 호출됩니다.
  
    위 코드에서는 의존성 배열에 아무것도 전달하지 않았기 때문에 callback 함수는 컴포넌트가 처음 렌더링될 때 한 번만 호출됩니다.
  */

  // let liOffsetHeight = menuRef.current.offsetHeight;

  // console.log(liOffsetHeight);

  // console.log(liOffsetHeight);

  // useEffect(() => {
  //   setTop(liOffsetHeight);
  // }, []);

  // console.log("liOffset =" + liOffsetHeight);

  // console.log("top = " + top);

  // setInterval(() => {



  // useEffect(() => {



  // }, [])

  // }, 1000)

  // function menuAutoSlide() {


  // }

  return (
    <>
      <header>
        <div className='inner'>
          <nav className="gnb_wrap">
            {/* <span>메뉴</span> */}
            <ul className='gnb_list' >
              <li className='gnb_list_li' ref={menuRef} style={{ top: `-${topY}px` }}>
                {/* li요소를 레퍼런스 ref로 설정하여 요소에 접근할 수 있도록 해준다.*/}
                침대 패드
              </li>
              <li className='gnb_list_li' style={{ top: `-${topY}px` }}>
                화장대
              </li>
              <li className='gnb_list_li' style={{ top: `-${topY}px` }}>
                집들이
              </li>
              <li className='gnb_list_li' style={{ top: `-${topY}px` }}>
                가나다  
              </li>
              <li className='gnb_list_li' style={{ top: `-${topY}px` }}>
                라마바
              </li>
              <li className='gnb_list_li' style={{ top: `-${topY}px` }}>
                사아자
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default App;
