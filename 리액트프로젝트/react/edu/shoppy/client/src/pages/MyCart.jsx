import React, { useEffect, useState } from "react";
import { getUser } from "../util/localStorage";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BookCheckBox from "./components/BookCheckBox";
export default function MyCart() {

  const userInfo = getUser();
  //서버에 회원의 장바구니 리스트 가져오기
  //http://127.0.0.1:8000/carts/:id

  // let [qty, setQty] = useState(1);
  // let [pric, setPric] = useState(0);
  // let [dei, setDei] = useState(0);
  let [flag, setFlag] = useState("");
  let [list, setList] = useState([])
  let [btnCid, setBtnCid] = useState("");
  let [totPrice, setTotPrice] = useState(0);
  let [totDeliPirce, setTotDeliPirce] = useState(0);
  let [totOrderPrice, setTotOrderPrice] = useState(0);
  const navigate = useNavigate();

  const getQty = (e) => {

    // setQty(e.qty) //수량
    // setPric(e.price)//가격
    // setFlag(e.flag)// +-
    // setDei(e.deli)//배송비

    // alert(JSON.stringify(e))

    if (e.flag === "minus") {

      if (e.qty >= 1) {

        setTotPrice(totPrice - parseInt(e.price))
        setTotDeliPirce(totDeliPirce - parseInt(e.deli))
        setTotOrderPrice(totOrderPrice)

      } else if (e.qty < 1) {

        setTotPrice(totPrice - parseInt(e.price))
        setTotDeliPirce(totDeliPirce)
        setTotOrderPrice(totOrderPrice)

      }



    } else if (e.flag === "plus") {

      if (e.qty < 20) {

        setTotPrice(totPrice + parseInt(e.price))
        setTotDeliPirce(totDeliPirce + parseInt(e.deli))
        setTotOrderPrice(totOrderPrice)

      }


    }

  }



  useEffect(() => {

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}`
    }).then((result) => {
      setList(result.data)
      console.log(result);
      const newTotPrice = setNewTotPrice(result.data);
      setTotPrice(newTotPrice)
      const newDeliPrice = setNewDeliPrice(result.data);
      setTotDeliPirce(newDeliPrice)
      const newTotOrderPrice = setNewOrderPrice(result.data);
      setTotOrderPrice(newTotOrderPrice)
      // const priceList = list.map((lst) => {

      //   return lst.price

      // })

      // console.log(priceList);

    })

    // 총 상품가격 계산함수



    const setNewTotPrice = (cartList) => {
      return cartList.reduce((total, item) => total + (item.price * item.qty), 0);
      // const prc = data.map((list) => {

      //   return list.price

      // })

    }

    const setNewDeliPrice = (deliList) => {

      return deliList.reduce((total, item) => total + (item.deli * item.qty), 0)

    }

    const setNewOrderPrice = (orderList) => {

      return orderList.reduce((total, item) => total + ((parseInt(item.price) + parseInt(item.deli)) * item.qty), 0)

    }

  }, [])


  const handleDelete = (e) => {

    const cid = e.target.dataset.id
    setBtnCid(cid)
    axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${cid}`)
      .then(result => {
        if (result.status === 204) {
          // alert("삭제가 완료되었습니다.")
          window.location.reload();
        }
      }).catch(console.log("error"));




  }

  const handlerOrder = (e) => {

    const orderArr = []

    const filterId = list.map((lst) => {

      return orderArr.push({ id: lst.id, pid: lst.pid, size: lst.size, qty: lst.qty, totPrice: totPrice })

      // 주문id(pk), 회원아이디, 상품아이디, 주문날짜,옵션(사이즈등), 수량,총 주문금액

    })

    navigate(`/order/${userInfo.id}`)


    axios({

      method: "POST",
      url: `http://127.0.0.1:8000/order/${userInfo.id}`,
      data: orderArr,

    }).then((result) => {

      if (result.status === 204) {

        navigate(`/order/${userInfo.id}`)

      }


    }).catch(console.log("error"));


  }


  return (
    <>
      {userInfo ? (
        <>
          <section className="cart_section_wrap">
            <h2>장바구니 리스트</h2>
            <ul className="cart_list">
              {list.map((lst) =>
                <li className="cart_list_li">
                  <Link className="cart_list_link" to={`/product/${userInfo.pid}`}>
                    <img src={`/images/${lst.image}`} alt="이미지" />
                  </Link>
                  <ul className="cart_list_text_list">
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">순서 : </span>{lst.cid}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">아이디 : </span>{lst.id}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">상품명 : </span>{lst.name}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">상품설명 : </span>{lst.info}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">상품개수 : </span> {lst.qty}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">등록날짜 : </span>{lst.cdate}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">사이즈 : </span> {lst.size}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">가격 : </span>{lst.price}
                      <select name="qty_change">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                      {/* 데이터베이스측 add를 사용하여 동적쿼리로 만들 수 있음 */}
                    </li>
                    <li className="cart_list_text_list_li">
                      <span className="cart_list_text_list_span">배송비 : </span>{lst.deli}
                    </li>
                  </ul>
                  <BookCheckBox price={lst.price} deli={lst.deli} getQty={getQty} qty={lst.qty} />
                  {/* 함수를 넘기면 값을 받아와서 사용할 수 있음 */}
                  <button
                    variant="danger"
                    type="button"
                    className="cart_list_delete_btn"
                    data-id={lst.cid}
                    onClick={handleDelete}> {/* 이벤트.target.dataset.id */}
                    삭제</button>
                </li>
              )}
            </ul>
            <div className="total_price_wrap">
              <label>총 상품가격</label><span className="total_price_span">{totPrice.toLocaleString()}</span>
              <label>+ 총 배송비</label><span className="total_price_span">{totDeliPirce.toLocaleString()}</span>
              <label>= 총 주문금액</label><span className="total_price_span">{totOrderPrice.toLocaleString()}</span>
            </div>
            <button type="button" onClick={handlerOrder}>주문하기</button>

          </section>



        </>


























      ) :

        <>
          (<div>잘못된 경로로 접속하셨습니다.</div>)

        </>

      }




    </>
  );



}