import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Root(){

  return(

    <>
      <div>
        <Navbar />
        <Outlet />
        {/* 해당하는 요청을 부분적으로 출력 */}
      </div>
    </>

  )

}