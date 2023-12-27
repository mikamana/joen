import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function useOrder(cartList) {

    const navigate = useNavigate();
    
    const handleOrder = async () =>{

      const newOrderList = new Array(); //[{},{}..]
      cartList.map((cart) => {
        const orderProduct = {
          id: cart.id,
          pid: cart.pid,
          size: cart.size,
          qty: cart.qty,
          totPrice: cart.tprice
        };
        newOrderList.push(orderProduct);
      });

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/order/new",
        data: newOrderList
      })
        .then((result) => {
          if (result.data === 'ok') {
            // alert("주문 테이블 추가성공!");
            navigate('/order');
          }
        })
        .catch();

    }

    return {handleOrder}

}


