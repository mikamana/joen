import React from "react";
import "../App.css";
import { useState } from "react";
import Products from "../components/Product";


export default function AppToggle(props){

  let [showProducts,setShowProducts] = useState(false);

  const handleClick = () =>{

    setShowProducts(!showProducts)
    // setShowProducts((show)=> !show)

  }

  return(
    <>
      {/* <button className="toggle_btn" type="button" onClick={()=>{showProducts === false ? setShowProducts(true) : setShowProducts(false)}}>
        Toggle
      </button> */}
      <button className="toggle_btn" type="button" onClick={handleClick}>
        Toggle
      </button>
      {/* {showProducts === true ? <Products /> : null} */}
      {showProducts && <Products onClick=""/>}
    </>
  );

}