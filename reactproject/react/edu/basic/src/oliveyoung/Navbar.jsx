import React, { Children } from "react"; //Children --> children 
import "../css/olivecss/Header.css";

export default function Navbar({children}){

  return(

    <>
      <header className="header">
        <div className="inner">
          {children}
        </div>
      </header>
    </>
    

  );

}