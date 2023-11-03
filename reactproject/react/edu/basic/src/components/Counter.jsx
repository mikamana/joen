import React, { useState } from "react";



export default function Counter(props){
  let [count, setCount] = useState(0);
  // 이벤트를 주었을때 상태가 변하는 객체의 초기값
  // 컴포넌트 만들 때는 되도록 작게 만든다.
  // 독립적으로 만든다.

  function increment(){
    
    setCount(count => count+1)

  }
  
  return(

    <div>
        <span className="number">{count} / <span className="total">{props.totalCount}</span></span>
        {/* <button className="button" type="button" onClick={()=>{

          increment();
          increment();
          increment();

        }}>Add + 3</button> */}
        <button className="button" type="button" onClick={()=>{
          // setCount(count+1);
          increment();
          props.onClick();
          // 함수호출해야 AppCounter로 함수 전달됌

        }}>Add + 1</button>
    </div>

  );

}