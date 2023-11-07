import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

  return(

    <>
      <nav>
        <Link to="/">종합</Link>
        <Link to="/realtime">실시간</Link>
        <Link to="/day">일별</Link>
        <Link to="/monthweek">월별/주별</Link>
        <Link to="/hotprice">특가</Link>
        <Link to="/steady">스테디셀러</Link>
      </nav>
    </>

  )

}