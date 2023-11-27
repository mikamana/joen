import React, { useEffect, useState } from "react";
import { getUser } from "../util/localStorage";
import Table from 'react-bootstrap/Table';
import axios from "axios";

export default function Order() {

  const userInfo = getUser();
  const [orderList, setOrderList] = useState([])

  useEffect(() => {

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/order/${userInfo.id}`

    }).then((result) => {

      setOrderList(result.data)

    })

  }, [])

  console.log(orderList);

  return (

    <>
      <div className="order_wrap">
        {/* 
    
          주문하기 클릭시 나오는 페이지 
          현재 장바구니에서 선택한 상품들의 리스트가 출력된다.

    
        */ }
        <h2>주문 페이지</h2>
        <div className="order_list_wrap">
          <ul className="order_list">
            {orderList.map((lst) =>

              <>
                <li className="order_list_li">
                  <fieldset>
                    <img className="order_list_img" src={`/images/${lst.image}`} alt="이미지1" />
                  </fieldset>
                  <ul className="order_list_sub">
                    <li>
                      <p><span>아이디 : </span>{lst.id}</p>
                    </li>
                    <li>
                      <p><span>순서 : </span>{lst.oid}</p>
                    </li>
                    <li>
                      <p><span>사이즈 : </span>{lst.size}</p>
                    </li>
                    <li>
                      <p><span>개수 : </span>{lst.qty}</p>
                    </li>
                    <li>
                      <p><span>날짜 : </span>{lst.odate}</p>
                    </li>
                    <li>
                      <p><span>상품명 : </span>{lst.name}</p>
                    </li>
                    <li>
                      <p><span>배송비 : </span>{lst.deli_price}</p>
                    </li>
                    <li>
                      <p><span>가격 : </span> {lst.price}</p>
                    </li>
                  </ul>
                </li>
              </>

            )}

          </ul>
        </div>
        <div className="tot_wrap">
          <p></p>
        </div>
        <Table striped bordered hover >
          <thead>
            <tr>
              <td>주문고객</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>고객정보</td>
            </tr>
          </thead>
        </Table>
        <Table striped bordered hover >
          <thead>
            <tr>
              <td>주문상품</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>주문리스트</td>
            </tr>
          </thead>
        </Table>
        <Table striped bordered hover >
          <thead>
            <tr>
              <td>결제방식</td>
            </tr>
          </thead>
          <thead>
            <tr>
              <td>결제방식 선택정보</td>
            </tr>
          </thead>
        </Table>
      </div>
    </>

  );


}