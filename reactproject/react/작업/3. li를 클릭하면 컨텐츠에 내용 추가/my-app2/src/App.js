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
  const sortAscending = () => {
    // 배열 복사 후 오름차순 정렬
    let copy = [...list];
    copy.sort((a, b) => a.localeCompare(b)); // 오름차순 정렬

    // 상태 업데이트
    fnSystem(copy);

  };// 오름차순
  const sortDescending = () =>{

    let copy = [...list];
    
    copy.sort((a,b)=>b.localeCompare(a));

    fnSystem(copy)

  };// 내림차순

  const [selectedItem, setSelectedItem] = useState(0);

  const handleLiClick = (index) => {
    // li 클릭하면 실행되는 함수

    setSelectedItem(index);
    // setSelectedItem의 값이 index값으로 바뀜 
  };// li클릭하면 실행하는 함수

  // 태그안 중괄호안에 조건을 넣어줄 수 있다.
  //               {selectedItem !== null && (
  //<YourOtherComponent name={list[selectedItem]} />
  //    )}
  // selectedItem !== null && (selectedItem 이 존재하고)
  //(<YourOtherComponent name={list[selectedItem]} />)
  // YourOtherComponent가 있다면 컴포넌트에 name을 list의 selectedItem 인덱스를 추가한다.

  return (
    <div>
      <header className="header_wrap">
        <div className="logo_wrap">
          <h1 className="logo">{post}<span onClick={()=> fnHeart((heart)=>heart+1)}>❤</span>{heart}</h1>
          <nav className="gnb">
            <button type="button" onClick={sortAscending}>오름차순정렬</button>
            <button type="button" onClick={sortDescending}>내림차순정렬</button>
            <ul>
              {list.map((node,idx)=>(
                <li key={idx} onClick={()=>handleLiClick(idx)}>
                  {node}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className='contents_wrap'>
          <div className="inner">
            <div className="admin">
              {selectedItem !== null && (
                <YourOtherComponent name={list[selectedItem]} />
              )}
            </div>
            <table className='table_wrap'>
              <thead>
                <tr>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>성별</th>
                  <th>생일</th>
                  <th>지역</th>
                  <th>포인트</th>
                </tr>
              </thead>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

function YourOtherComponent({ name }) {
  return (
    <div>
      <h2 className='title_style'>{name}</h2>
      <p className='info_style'></p>
    </div>
  );
}
// function YourOtherComponent(props){
//   const {name} = props; // props에서 필요한 값 추출
//   //컴포넌트
//   //병렬적으로 컴포넌트를 만들고싶을 때
//   //의미없는 <div></div>대신 <></> 사용 가능하다.
//   // 컴포넌트로 만드는 경우
//   // 1. 반복적인 HTML 축약할 떄
//   // 2. 큰페이지들
//   // 3. 자주변경되는 것들

//   return (
//     <>
//       <div className="title_wrap">
//         <h2 className='title_style'>{name}</h2>
//         <p className='info_style'>당신은 우리의 소중한 고객입니다.</p>
//       </div>
//     </>
//   )
// }



export default App;
