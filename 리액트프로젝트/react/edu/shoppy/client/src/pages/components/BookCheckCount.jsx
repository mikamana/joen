import React, { useState } from "react";


export default function BookCheckCount(props) {

  let [number, setNumber] = useState(props.qty);
  //장바구니 클릭시 이 state 값이 넘어가야함

  function quantityCheck(checkFlag, e) {
    // 파라미터에 이벤트를 줄 때에는 파라미터의 뒤쪽에 넣어주어야한다.

    if (checkFlag == "minus") { // minus입니다. 

      number > 1 ? setNumber(--number) : alert("최소 수량은 1개 입니다.")

    } else {

      number < 10 ? setNumber(++number) : alert("최대 수량은 10개 입니다.")

    }

    props.getQty({ qty: number, price: props.price, deli: props.deli, flag: checkFlag })

    console.log(number);


  }

  return (

    <>
      {/* <input type="checkbox" /> */}
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