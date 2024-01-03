import React, { useEffect, useState } from 'react';
import CartDeleteItem from './CartDeleteItem';
import useQty2 from '../hooks/useQty2';
import { cartQtyUpdate } from '../modules_redux/reduxQty';
import { useDispatch } from 'react-redux';
export default function CartItem2({ cart, key, userInfo }) {

  let [number, setNumber] = useState(cart.qty);

  const { updateCartQty } = useQty2();

  // useEffect나 커스텀훅 안에서 커스텀훅을 사용하지못함

  const quantityCheck = async (type) => {

    if (type === 'minus') {
      if (number === 1) {
        alert('최소 1개 이상');
      } else {
        //DB업데이트
        await updateCartQty(cart.cid, userInfo, type)
        // 자바스크립트안에 커스텀훅을 바로 호출하는 것은 불가능하고, 
        // 하나의 요소로서 리턴받아서 사용하는 것은 가능함
      }
    } else if (type === 'plus') {
      //최대10개
      if (number === 10) {
        alert('최대 10개');
      } else {
        //DB업데이트
        await updateCartQty(cart.cid, userInfo, type)
      }
    }

  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((cartQtyUpdate({ userInfo, cid, checkFlag, price })))
  }, [])

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
            <span style={style}>{number}</span>
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

