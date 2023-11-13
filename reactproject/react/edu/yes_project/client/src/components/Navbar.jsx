import React from "react";
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
// import { changeName } from "../store";
export default function Navbar() {

  return (
    <>
      <nav>
        <Link className="book" to="/bestseller">종합</Link>
        <Link className="realtime" to="/realtime">실시간</Link>
        <Link className="day" to="/day">일별</Link>
        <Link className="month" to="/monthweek">월별/주별</Link>
        <Link className="hotprice" to="/hotprice">특가</Link>
        <Link className="steady" to="/steady">스테디셀러</Link>
      </nav>
    </>
  )

}