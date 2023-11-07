import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

  return(

    <>
      <nav>
        <Link to="/">종합</Link>
        <Link to="/BestSellerList">실시간</Link>
        <Link to="/DayBestSeller">일별</Link>
        <Link to="/MonthWeekBestSeller">월별/주별</Link>
        <Link to="/HotPriceBestSeller">특가</Link>
        <Link to="/SteadySeller">스테디셀러</Link>
      </nav>
    </>

  );

}