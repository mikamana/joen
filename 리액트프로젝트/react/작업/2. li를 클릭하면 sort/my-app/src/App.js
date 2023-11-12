/* eslint-disable */

import { useState } from 'react';
import './css/header.css';
import './css/reset.css';
import './css/main.css';

function App() {

  let post = "관리자사이트";

  let [list,fnSystem] = useState(['고객관리','사원관리','상품관리','주문관리','매출관리']);
  let [heart,fnHeart] = useState(0);
  // fnHeart는 state변경용 함수이다.
  // array/object 다룰 때 원본은 보존하는게 좋음
  // let [a,fnImage] = useState(list[0]);
  // state 변경 함수 특징 : 기존 state == 신규 state의 경우 변경안해준다.

  const sortDescending = () =>{

    let copy = [...list];

    copy.sort((a,b)=>b.localeCompare(a));

    fnSystem(copy)

  }

  const sortAscending = () => {
    // 배열 복사 후 오름차순 정렬
    let copy = [...list];
    copy.sort((a, b) => a.localeCompare(b)); // 오름차순 정렬

    // 상태 업데이트
    fnSystem(copy);

  };

  const [showComponent, setShowComponent] = useState(false);
  
  const handleLiClick = () => {
    
    setShowComponent(true);
    
  };
  
  const [showEmpComponent, setShowEmpComponent] = useState(false);
  const handleLiClickEmp = () => {

    setShowEmpComponent(true);

  };

  return (
    <div>
      <header className="header_wrap">
        <div className="logo_wrap">
          <h1 className="logo">{post}<span onClick={()=> fnHeart((heart)=>heart+1)}>❤</span>{heart}</h1>
          <nav className="gnb">
            <button type="button" onClick={sortAscending}>오름차순정렬</button>
            <button type="button" onClick={sortDescending}>내림차순정렬</button>
            <ul>
              <li onClick={()=>{
              let copy = [...list];
              // 원본데이터 수정을 피하고 카피본을 만들어 작업한다.
              // state 변경 함수 특징상 기존 state와 신규 state가 같으면 변경해주지 않기 때문에,
              // copy가 가르키고있던 주소가 바뀌어야한다.
              // list는 주소를 가르키고있고, copy도 동일한 주소를 가리킨다. 즉 copy안의 값을 수정하면 list의 값도 바뀐다.
              // 하지만 배열안의 값을 변경하더라도 가르키는 주소는 같기 때문에 state는 주소가 같아서 변경되지않음으로 인식해서
              // 최종적으로 값을 변경해주지 않는다.
              // state가 array/object면 shallow copy를 만들어서 수정해야함
              copy[0] = "이미지관리";
              fnSystem(copy)

              }}>{list[0]}</li>
              <li onClick={handleLiClickEmp}>{list[1]}</li>
              <li onClick={handleLiClick}>{list[2]}</li>
              <li>{list[3]}</li>
              <li>{list[4]}</li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='all_wrap'>
          <div className="inner">
            <div className="admin">
              {showComponent && <YourOtherComponent name="상품관리" />}
              {showEmpComponent && <YourOtherComponent name="사원관리" />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function YourOtherComponent(props){
  const {name} = props; // props에서 필요한 값 추출
  //컴포넌트
  //병렬적으로 컴포넌트를 만들고싶을 때
  //의미없는 <div></div>대신 <></> 사용 가능하다.
  // 컴포넌트로 만드는 경우
  // 1. 반복적인 HTML 축약할 떄
  // 2. 큰페이지들
  // 3. 자주변경되는 것들

  return (
    <>
      <div className="title_wrap">
        <h2 className='title_style'>{name}</h2>
        <p className='info_style'>당신은 우리의 소중한 고객입니다.</p>
      </div>
    </>
  )
}



export default App;
