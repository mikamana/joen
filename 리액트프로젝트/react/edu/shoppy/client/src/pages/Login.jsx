import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../util/cookie";
import { jwtDecode } from "jwt-decode";
// import getCookie from "../util/cookie.js";
// import removeCookie from "../util/cookie.js";

export default function Login() {

  const [inputChange, setInputChange] = useState({ id: "", pass: "" })
  const [getData, setGetData] = useState([])
  const navigate = useNavigate();
  const inputId = useRef(null);
  const inputPass = useRef(null);
  //주소창에 데이터 받아올 경우 get

  function fnLoginHandler(e) {

    e.preventDefault();
    console.log(setCookie);

    axios({

      method: "post",
      url: 'http://127.0.0.1:8000/login/',
      data: inputChange

    })
      .then((result) => {
        setGetData(result.data.cnt)
        if (result.data.login_result) {
          alert("로그인에 성공하셨습니다.");
          //로그인 성공하면 토큰 넘어옴
          setCookie("x-auth-jwt", result.data.token);
          // 아이디 빼와서 로컬스토리지에 저장한 후에
          // 로그인,로그아웃 유무에 따라 Navbar가 달라지는 작업 로컬스토리지.js에서 처리
          // 토큰에 추가된 id 추출(토큰 디코딩: jwt-decode) 후  로컬스토리지에 저장
          const userInfo = jwtDecode(result.data.token);
          // alert(JSON.stringify(userInfo));
          // console.log(userInfo);
          // alert(result.data.token);
          localStorage.setItem("userInfo", JSON.stringify(userInfo));
          const getCook = getCookie("sproduct")

          if (getCook) {
            navigate(getCook)
          } else {
            navigate("/");
          }

        } else {
          if (result.data.cnt === 1) {

            alert("패스워드가 다릅니다. 다시 확인해주세요")
            inputPass.current.focus();
            setInputChange({ id: result.data.id, pass: "" })

          } else {

            alert("아이디가 다릅니다. 다시 확인해주세요.")
            inputId.current.focus();
            setInputChange({ id: "", pass: "" })

          }

        }
      })
      .catch()

    if (inputChange.id === "") {

      alert("아이디를 입력해주세요")
      return inputId.current.focus();

    }

    if (inputChange.pass === "") {

      alert("비밀번호를 입력해주세요")
      return inputPass.current.focus();

    }

  }

  function handlerChange(e) {

    const { name, value } = e.target

    setInputChange({ ...inputChange, [name]: value })

  }

  function handleReset() {

    setInputChange({ id: "", pass: "" })

  }

  return (

    <>
      <form onSubmit={fnLoginHandler}>
        <ul>
          <li>
            <label htmlFor="id">아이디 :</label> <input type="text" ref={inputId} value={inputChange.id} name="id" onChange={handlerChange} />
          </li>
          <li>
            <label htmlFor="pass">비밀번호 :</label> <input type="text" ref={inputPass} value={inputChange.pass} name="pass" onChange={handlerChange} />
          </li>
          <li>
            <button>
              로그인
            </button>
            <button type="button" onClick={handleReset}>
              리셋
            </button>
            <Link to="/signup"> 회원가입</Link>
          </li>
        </ul>
      </form>
    </>

  )

}