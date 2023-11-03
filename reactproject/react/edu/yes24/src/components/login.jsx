import React from "react";


export default function Login(){

  function fnFetch(){

    // alert("3")
    const url = "/login"
    fetch(url)
    .then((response)=>response.json())
    .then((result)=>{

      alert("3")

    })

  }

  return(
    <div class="login">
      <form className="login_wrap" onSubmit={fnFetch}>
        <h1>로그인</h1>
        <p> 아이디 : <input type="text" placeholder="아이디를 입력하세요"/></p>
        <p> 비밀번호 : <input type="text" placeholder="비밀번호를 입력하세요"/></p>
        <button type="submit">로그인하기</button>
      </form>
    </div>
  );

}