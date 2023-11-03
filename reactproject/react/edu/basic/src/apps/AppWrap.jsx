import React from "react"; //Children --> children 
import Navbar from "../oliveyoung/Navbar";
import HeaderImg from "../components/header/HeaderImg";
import HeaderSearch from "../components/header/HeaderSearch";
import Content from "../oliveyoung/Content";
import '../App.css';
import BoxList from "../components/contents/first_cts/BoxList";
import "../css/olivecss/reset.css";
import Footer from "../oliveyoung/Footer";


export default function AppWrap(){
  // 
  const rename = <span>유사한 고객님이 <br></br>많이 주문했어요</span>
  return(

    <>
      <div>
        <Navbar>
          <HeaderImg></HeaderImg>
          <HeaderSearch></HeaderSearch>
        </Navbar>
        <Content>
          <BoxList name={rename}></BoxList>
        </Content> 
        <Footer>
        </Footer>
      </div>
    </>

  );


}