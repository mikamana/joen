import React from "react";
import { useState } from "react";

export default function AppForm(){

  // 리액트는 원칙주의자이다.
  // 프레임워크와 비슷한 라이브러리
  // 일반적인 form 형태로 사용하면 리액트의 원칙,형식에서 벗어나는 것을 UnControllerConponents 라고한다.
  // 리액트에서는 이벤트를 직접주고 상태값을 받는 형식으로 만들어야한다.

  // const [name,setName] = useState(false)
  // const [email,setEmail] = useState(false)
  // const [input,setInput] = useState(["name","email"])

  const [form, setForm] = useState({name:'',email:''});
  // JSON 객체로 받음
  // 초기값을 주어 초기화시켜준다.(안주면 오류발생할 수 있음) 

  // const changeInput = (e) =>{

  //   setInput([e.target.value,e.])
  //   console.log(name);

  // }


  const changeInput = (e) => {

    const {name,value} = e.target;
    // const {email,value} = e.target;
    setForm({...form, [name]: value});
    console.log(form);
    if(form.name.length >= 10){
      setForm({ ...form, name: '' }); // 이름 필드를 초기화
      alert("이름은 10자 이내로 작성해주세요");
    }
    // setForm({...form, [name]:value, [email]:value})
    // 스프레드연산자 사용 > 빠지면 입력값 빼고 다 초기화됌(예를 들어 input name을 주면 input email은 초기화됌) > 기존에 있는 값을 유지하려면 스프레드연산자 넣어야함
    // 이름은 10자 이하로 작성가능
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    console.log(form);
  }

  return(

    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름</label>
        <input type="text" name="name" id="name" value={form.name} onChange={changeInput}/>
        <label htmlFor="email" >이메일</label>
        <input type="text" name="email" id="email" value={form.email} onChange={changeInput}/>
        <button>전송</button>
      </form>
    </>

  )

}