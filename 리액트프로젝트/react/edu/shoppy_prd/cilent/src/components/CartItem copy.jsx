import React, { useRef, useState } from 'react';
import Quantity from './../components/Quantity';
import axios from 'axios';
import CartDeleteItem from './CartDeleteItem';
import useQty from '../hooks/useQty';
export default function CartItem({ cart, key, userInfo }) {

  let [number, setNumber] = useState(cart.qty);

  const numRef = useRef(null);

  useQty(number, cart.cid, userInfo, numRef, type)

  const quantityCheck = (checkFlag) => {
    let qtyCheckFlag = false;
    if (checkFlag === "minus") {
      if (number > 1) {
        setNumber(--number);
        qtyCheckFlag = true;
      } else {
        alert("최소 수량은 1개 입니다.");
      }
    } else {
      if (number < 10) {
        setNumber(++number);
        qtyCheckFlag = true;
      } else {
        alert("최대 수량은 10개 입니다.");
      }
    }
  }



  const quantityCheck = (type) => {

    if (type === 'minus') {
      if (number === 1) {
        alert('최소 1개 이상');
      } else {
        //DB업데이트
        useQty(cart.cid, userInfo, numRef, type);
      }
    } else if (type === 'plus') {
      //최대10개
      if (number === 10) {
        alert('최대 10개');
      } else {
        //DB업데이트
        useQty(cart.cid, userInfo, numRef, type);
      }
    }

  }



  //getQty
  const [qty, setQty] = useState(1);
  const [flag, setFlag] = useState(0);
  const [cd, setCd] = useState("");

  // Quantity 수량 이벤트
  const getQty = (e) => {

    setQty(e.qty);
    setFlag(e.qtyFlag);
    setCd(e.cid);

    if (e.flag === 'plus') {
      if (e.qtyFlag) {
        updateQty(e.cid, e.flag); //DB에서 수량 변경 ++
        // setTotPrice(totPrice + parseInt(e.price));
        // setTotOrderPrice(totPrice + parseInt(e.price));
      }
    } else {
      if (e.qtyFlag) {
        updateQty(e.cid, e.flag); //DB에서 수량 변경 --
        // setTotPrice(totPrice - parseInt(e.price));
        // setTotOrderPrice(totPrice - parseInt(e.price));
      }
    }

  }

  function updateQty(cid, checkFlag) {
    //http://127.0.0.1:8000/carts/:고객아이디/:장바구니아이디/:상태값
    axios({
      method: "put",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${checkFlag}`
    })
      .then((result) => window.location.reload())
      .catch();

  }

  let style = { width: "20px", display: "inline-block" }
  let style_minus = { width: "30px", display: "inline-block", backgroundColor: "lightGray", cursor: "pointer" }
  let style_plus = { width: "30px", display: "inline-block", backgroundColor: "lightGray", cursor: "pointer" }
  let p_style = { margin: "20px 0 20px 0 " }
  let div_style = { border: "1px solid red", overflow: "hidden", width: "50%" }



  return (
    <>
      <tr key={key}>
        <td className="align_style">{cart.rno}</td>
        <td>
          <img className="img_style" src={`http://127.0.0.1:8000/${cart.image}`} />
          {cart.name}
        </td>
        <td className="align_style">{cart.price}</td>
        <td className="align_style">0원</td>
        <td className="align_style">
          <p style={p_style}>
            <span style={style_minus} onClick={(e) => { quantityCheck("minus") }}> - </span>
            <span style={style} ref={numRef}>{number}</span>
            <span style={style_plus} onClick={(e) => { quantityCheck("plus") }}> + </span>
          </p>
          {/* 커스텀훅안에 변수형태를 사용하기위한 방법 */}
          {/* <Quantity qty={cart.qty} price={cart.price} getQty={getQty}

            cid={cart.cid} /> */}
          <CartDeleteItem cid={cart.cid} userInfo={userInfo} />
        </td>
      </tr>

    </>
  );

}