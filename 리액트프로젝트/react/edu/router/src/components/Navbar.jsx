/* 싱글페이지에 들어가는 컴포넌트 */

import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
export default function Navbar(){

  return(

    <>
      <nav className="navbar">
        <Link to='/' className="menu">Home</Link>
        <Link to='/video' className="menu">Video</Link>
        {/* a태그 역할, a태그를 사용하면 오류 생길 수 있음, a 대신 되도록이면 Link를 사용한다.*/}
      </nav>
    </>

  )
  }