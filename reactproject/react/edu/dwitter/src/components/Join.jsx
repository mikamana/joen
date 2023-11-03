import React, { useState } from "react";

export default function Join(props){

  const [login, setLogin] = useState(false)

  const loginHandler = (event) =>{

    setLogin(!login)

  }

  return(

    <>
      <button type="button" onClick={()=>{

        loginHandler()
        props.onClick()

      }}>Login</button>&nbsp; /&nbsp;
      <a href="#">회원가입</a>
    </>

  );

}