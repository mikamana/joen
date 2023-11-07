import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../App.css";
import Book from "../components/Book";
export default function Root(){

  return(

    <>
      <Navbar />
      <Book />
      <Outlet />
    </>

  );

}