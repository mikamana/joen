import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";
import "../css/book.css";

export default function Root() {

  return (

    <>
      <Navbar />
      <Outlet />
    </>

  );

}