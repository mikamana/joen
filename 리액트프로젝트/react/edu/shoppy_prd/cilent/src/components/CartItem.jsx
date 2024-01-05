import React, { useEffect, useState } from 'react';
import CartDeleteItem from './CartDeleteItem';
import { useDispatch } from 'react-redux';
import { cartQtyFetchData } from '../API/cartQtyAPI';
export default function CartItem({ cart, key, userInfo }) {

  let [number, setNumber] = useState(cart.qty);
  const [check, setCheck] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(cartQtyFetchData(userInfo, cart, check));

  }, [number]);

  const quantityCheck = (checkFlag) => {
    if (checkFlag === "minus") {
      setCheck('minus');
      if (number > 1) {
        setNumber(--number);
      } else {
        alert("최소 수량은 1개 입니다.");
      }
    } else {
      if (number < 10) {
        setCheck('plus');
        setNumber(++number);
      } else {
        alert("최대 수량은 10개 입니다.");
      }
    }
  }

  let style = { width: "20px", display: "inline-block" }
  let style_minus = { width: "30px", display: "inline-block", backgroundColor: "lightGray", cursor: "pointer" }
  let style_plus = { width: "30px", display: "inline-block", backgroundColor: "lightGray", cursor: "pointer" }
  let p_style = { margin: "20px 0 20px 0 " }

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
          <CartDeleteItem cid={cart.cid} userInfo={userInfo} />
        </td>
      </tr>
    </>
  );
}

