import React, { useState } from "react";


export default function BookCheckCount() {

  let [number, setNumber] = useState(0);



  function quantityCheck(checkFlag, e) {
    // 파라미터에 이벤트를 줄 때에는 파라미터의 뒤쪽에 넣어주어야한다.

    if (checkFlag == "minus") { // minus입니다. 

      number > 1 ? setNumber(--number) : alert("최소 수량은 1개 입니다.")

    } else {

      number < 10 ? setNumber(++number) : alert("최대 수량은 10개 입니다.")

    }


  }

  return (

    <>
      <input type="checkbox" />
      <span className="book_content__count--bg" onClick={() => {

        quantityCheck("minus")

      }}>-</span>
      <span className="book_content__count--text">{number}</span>
      <span className="book_content__count--bg" onClick={() => {

        quantityCheck("plus")

      }}>+</span>
    </>


  );

}