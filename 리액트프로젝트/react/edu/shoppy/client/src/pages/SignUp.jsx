import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {

  const navigate = useNavigate()
  const [inputChange, setInputChange] = useState({ name: "", id: "", pass: "", phone: "" });
  const inputName = useRef(null);
  const inputId = useRef(null);
  const inputPass = useRef(null);
  const inputPhone = useRef(null);

  const joinSubmit = (e) => {

    e.preventDefault()

    console.log(inputChange);

    //validationCheck(유효성체크);

    if (inputChange.name === "") {

      alert("이름을 입력해주세요")

      return inputName.current.focus()

      //해당 조건이 참(true)일 때 함수를 즉시 종료하고 값을 반환하는 역할을 합니다.
      //함수가 실행 중일 때 return문이 실행되면 함수의 실행이 종료되며, 그 시점에서 함수가 호출된 곳으로 값을 반환합니다.
      //이러한 사용은 특히 함수가 특정 조건을 만족할 때만 계속해서 실행되어야 하는 경우에 유용합니다.

    }

    if (inputChange.id === "") {

      alert("아이디를 입력해주세요")

      return inputId.current.focus()

    }

    if (inputChange.pass === "") {

      alert("패스워드를 입력해주세요")

      return inputPass.current.focus()

    }
    if (inputChange.phone === "") {

      alert("핸드폰 번호를 입력해주세요")

      return inputPhone.current.focus()

    }


    axios({

      method: 'post',
      url: 'http://127.0.0.1:8000/signup/',
      data: inputChange,

    }).then((result) => {

      if (result.data = "ok") {

        navigate("/login")
        // window.location. 과 비슷한 기능

      }

    })

  }

  const fnChange = (e) => {

    const { name, value } = e.target

    setInputChange({ ...inputChange, [name]: value })

    console.log("name:" + inputChange.name);
    console.log("id:" + inputChange.id);
    console.log("pass:" + inputChange.pass);
    console.log("phone:" + inputChange.phone);

  }

  const handleReset = (e) => {

    // const iName = inputName.current.value = "";
    // const iId = inputId.current.value = "";
    // const iPass = inputPass.current.value = "";
    // const iPhone = inputPhone.current.value = "";
    // setInputChange({ name: iName, id: iId, pass: iPass, phone: iPhone })

    setInputChange({ name: "", id: "", pass: "", phone: "" })

  }

  return (

    <>
      <form onSubmit={joinSubmit}>
        <ul>
          <li>
            <label htmlFor="name" >이름</label>
            <input type="text"
              name="name"
              value={inputChange.name}
              onChange={fnChange}
              ref={inputName}
            />
          </li>
          <li>
            <label htmlFor="id">아이디</label>
            <input type="text"
              name="id"
              value={inputChange.id}
              onChange={fnChange}
              ref={inputId}
            />
          </li>
          <li>
            <label htmlFor="pass">패스워드</label>
            <input type="text"
              name="pass"
              value={inputChange.pass}
              onChange={fnChange}
              ref={inputPass}
            />
          </li>
          <li>
            <label htmlFor="phone">핸드폰번호</label>
            <input type="text"
              name="phone"
              value={inputChange.phone}
              onChange={fnChange}
              ref={inputPhone}
            />
          </li>
          <li>
            <button>회원가입</button>
            <button type="reset" onClick={handleReset}>다시쓰기</button>
          </li>
        </ul>
      </form>
    </>

  )


}