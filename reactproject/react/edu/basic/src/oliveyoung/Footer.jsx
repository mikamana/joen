import React, { Children } from "react"; //Children --> children 
import "../css/olivecss/Footer.css";

export default function Navbar({children}){

  return(

    <>
      <footer className="footer">
        <div className="inner">
          {children}
        </div>
      </footer>
    </>
    

  );

}