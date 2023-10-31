import resetCss from "./css/reset.css";
import headerCss from "./css/header/header.css";
import contentCss from "./css/contents/content.css";
import { useState } from 'react';

export const App = () => {

  // let liList = [{customerDate:'고객관리'},{employeeDate:"사원관리"},{productDate:"상품관리"},{ohDate: "주문관리"},{odDate:"매출관리"}]
  let [liList2,setList] = useState([{customerDate:'고객관리'},{employeeDate:"사원관리"},{productDate:"상품관리"},{ohDate: "주문관리"},{odDate:"매출관리"}])

  const [selectedItem, setSelectedItem] = useState('고객관리');
  // 콘텐츠 제목
  // const [selectedContent, setSelectedContent] = useState(null);
  // 콘텐츠 내용

  // function YourOtherComponent({ name }) {
  //   return (
  //     <div>
  //       <h2 className='title_style'>{name}</h2>
  //       <p className='info_style'></p>
  //     </div>
  //   );
  // }
  const YourOtherComponent = ({ name }) =>{

    return (
      <div>
        <h2 className='title_style'>{name}</h2>
        <p className='info_style'></p>
      </div>
    );

  }

  const handleLiClick = (value) => {

    setSelectedItem(value)


    // setSelectedContent(value)

    // setSelectedContent(value)

  }

  const setSelectedContent = ({props}) => {
    return(
      <div>
        <p>가나다라</p>
      </div>
    )
  }

  // function setSelectedContent(){
  //   return(
  //     <div>
  //       <p>가나다라</p>
  //     </div>
  //   )

  // }

  // function setSelectedContent(props){

  //   <div>
  //     <p>{props.name}</p>
  //     <p>{props.info}</p>
  //   </div>

  // }

  let item = [];

  liList2.map((node, idx) => {

    let key = Object.keys(node)[0]; // key 값
    let value = node[key]; // value 값

    item.push(<li key={idx} className={key} onClick={()=>handleLiClick(value)}>{value}</li>);
    return null; // map 함수에서 반드시 무언가를 반환해야 함

  });

  return (
    <div>
      <header>
        <div className="inner">
          <div className="logo_box">
            <h1 className="logo">관리자페이지</h1>
            <nav className="gnb">
              <ul>
                {item}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="contents_wrap">
          <div className="inner">
            <div className="content1">
              <h2 className="content_title">{selectedItem}</h2>
              <div className="content_info">
                <YourOtherComponent name={"가나다"}></YourOtherComponent>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export const App2 = () =>{

  return (

    <h2>가나다라</h2>
    
  );
}


