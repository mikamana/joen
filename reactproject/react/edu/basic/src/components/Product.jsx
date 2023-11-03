import React, { useEffect, useState } from "react";

export default function Product(){

  const [products,setProducts] = useState([]);
  // // 받아올 json파일의 객체들이 배열형태라 배열형태의 모습으로 받아옴
  // fetch('data/products.json') / /무한루프로 실행!
  // .then((response)=>response.json())
  // // .then((response)=>{JSON.Parse(response)})
  // .then((data)=>{

  //   setProducts(data)

  // });

  const [checked,setChecked] = useState(false);
  const handleChange = () =>{

    setChecked((sp)=> !checked)

  }

  useEffect(() => { // 최초에 한번만 fetch 실행
    //  React 컴포넌트가 렌더링되는 시점에서 비동기 호출을 직접 수행하면 문제가 발생
    fetch(`/data/${checked === true ? "sale_products.json" : "products.json"}`) // 
    // fetch("http://localhost:3000/basic/src/data/products.json") // 
      // .then((response) => JSON.parse(response))
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [checked]); // 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함


  return(

    <>
      <h1>show Products!!</h1>
      <input type="checkbox" name="checkbox" id="checkbox" onChange={handleChange}/>
      <label htmlFor="checkbox">Show only Sale!!</label>
      <ul>
        {
          
          products.map((prd,idx)=>
          
          <li key={prd.id}>
            <h3>{prd.name}</h3>
            <h3>{prd.price}</h3>
            <h3>{prd.id}</h3>
          </li>
          )

        }
      </ul>
    </>

  )

}


  // products.json --> fetch 사용해서 데이터 가져오기
  // let [button, setButton] = useState(false)
  // fetch("접속하는 주소 : Json객체로 리턴")
  // .then((제이슨객체문자로넘어옴)=>{제이슨객체문자로넘어옴.json()})
  // .then((변경된자바스크립트객체데이터))
  // toggle로 fetch일어나면 useState에 넣다 뺏다함