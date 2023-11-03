import React, { useState } from "react";


export default function AppLogin(){

  const [form,setForm] = useState({id:"", pass:""})
  // const [testForm,setTestForm] = useState({test:"1", test2:"2"})

  const handleLoginChange = (e) =>{

    const {name, value} = e.target

    setForm({...form, [name]:value});

    // 이것은 React에서 상태를 업데이트할 때 새로운 값을 불변성을 유지하면서 업데이트하는 방법 중 하나입니다.
    // 즉, 기존 객체를 직접 수정하는 것이 아니라 새로운 객체를 생성하여 업데이트합니다.

    console.log(form);

  }

  // const test = () => {
    
  //   setTestForm({...testForm,test:"sss", test2:"aa"})
  //   console.log("1",testForm);
  //   // setTestForm({testForm})
  //   // console.log("2",testForm);

  // }
  

  const handlerSubmit = (e) =>{

    e.preventDefault()

    console.log(form);

  }
  return(
    <>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="id">아이디</label>
        <input 
          type="text"
          name="id" 
          id="id"
          value={form.id}
          onChange={handleLoginChange}
          />
        <label htmlFor="pass">패스워드</label>
        <input         
          type="text"
          name="pass" 
          id="pass"
          value={form.pass}
          onChange={handleLoginChange}/>
        <button>login</button>
      </form>
      {/* <button type="button" onClick={test}></button> */}
    </>
  );

}