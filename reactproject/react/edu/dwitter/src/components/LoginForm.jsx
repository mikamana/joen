import React from "react";

export default function LoginForm(){

  return(

    <>
      <div className="login_form">
        <p><input type="text" placeholder="id를 입력하세요"/></p>
        <p><input type="text" placeholder="password를 입력하세요"/></p>
        <button type="button">로그인</button>
      </div>
    </>

  ); 

}