import React, { useEffect, useState } from "react";
import { getUser } from "../util/localStorage";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import BookCheckBox from "./components/BookCheckBox";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//페이징 처리
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

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
  const [cartList, setCartList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0); // db에서 가져오는 값이여야함
  const [pageSize, setPageSize] = useState(2);
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(3);
  // let [check, setCheck] = useState({ "q": false, "w": false, "e": false, "r": false, "t": false })
  // let [check, setCheck] = useState([{ "q": false }, { "w": false }, { "e": false }, { "r": false }, { "t": false }])
  // let [allCheck, setAllCheck] = useState(false)
  const navigate = useNavigate();



  function updateData(cid, flg, qty) {

    // axios({

    //   method: "put",
    //   url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${flg}`,
    //   data: { qty: qty, cid: cid, flag: flg }
    // }).then((result) => {
    //   if (result === "ok") {
    //     window.location.reload()
    //   }

    // })

    axios({

      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${flg}`
    }).then((result) => window.location.reload())

  }

  const getQty = (e) => {

    if (e.flag === "minus") {

      if (e.qtyFlag === true) {
        updateData(e.cid, e.flag, e.qty)
        setTotPrice(totPrice - parseInt(e.price))
        setTotDeliPirce(totDeliPirce - parseInt(e.deli))
        setTotOrderPrice(totOrderPrice - (parseInt(e.price) + parseInt(e.deli)))

      }



    } else if (e.flag === "plus") {

      if (e.qtyFlag === true) {
        updateData(e.cid, e.flag, e.qty)
        setTotPrice(totPrice + parseInt(e.price))
        setTotDeliPirce(totDeliPirce + parseInt(e.deli))
        setTotOrderPrice(totOrderPrice + (parseInt(e.price) + parseInt(e.deli)))

      }

    }

  }

  /* 
  
  회원의 장바구니 리스트 가져오기

  */
  useEffect(() => {

    //startIndex, endIndex

    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * pageSize + 1; // 1-1*3+1 : 1
    endIndex = currentPage * pageSize; //1*3 : 3

    // alert(`startIndex--> ${startIndex}, endIndex --> ${endIndex}`)

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`
      // url: `http://127.0.0.1:8000/carts/${userInfo.id}`
    }).then((result) => {
      setList(result.data)
      // setCartList()
      setTotalCount(result.data[0].cnt)


      console.log(result);
      const newTotPrice = setNewTotPrice(result.data);
      setTotPrice(newTotPrice)
      const newDeliPrice = setNewDeliPrice(result.data);
      setTotDeliPirce(newDeliPrice)
      const newTotOrderPrice = setNewOrderPrice(result.data);
      setTotOrderPrice(newTotOrderPrice)

    })

    // 총 상품가격 계산함수



    const setNewTotPrice = (cartList) => {
      return cartList.reduce((total, item) => total + (item.price * item.qty), 0);

    }

    const setNewDeliPrice = (deliList) => {

      return deliList.reduce((total, item) => total + (item.deli * item.qty), 0)

    }

    const setNewOrderPrice = (orderList) => {

      return orderList.reduce((total, item) => total + ((parseInt(item.price) + parseInt(item.deli)) * item.qty), 0)

    }

  }, [currentPage])


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
    // 실행하려는 기능에 관련된 데이터는 어디에 있는가? --> list: 정확한 데이터 추가
    // 회원 id,pid,size,qty,totPrice ==> JSON 객체로 생성 --> orderArr에 푸쉬
    const orderArr = []

    list.map((lst) => {

      return orderArr.push({ id: lst.id, pid: lst.pid, size: lst.size, qty: lst.qty, totPrice: totPrice })
      // 주문id(pk), 회원아이디, 상품아이디, 주문날짜,옵션(사이즈등), 수량,총 주문금액

    })

    axios({

      method: "POST",
      url: `http://127.0.0.1:8000/order/${userInfo.id}`,
      data: orderArr,

    }).then((result) => {

      if (result.status === 204) {

        navigate(`/order/${userInfo.id}`)

      }


    }).catch(console.log("error"));

    navigate(`/order/${userInfo.id}`)
    window.location.reload()

  }



  // const handleAllCheck = (e) => {

  //   const { checked } = e.target
  //   //Object.keys() 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.

  //   setAllCheck((allCheck) => !allCheck);

  //   if (allCheck === false) {

  //     setCheck([{ "q": true }, { "w": true }, { "e": true }, { "r": true }, { "t": true }])

  //   } else if (allCheck === true) {

  //     setCheck([{ "q": false }, { "w": false }, { "e": false }, { "r": false }, { "t": false }])

  //   }


  //   console.log(check);

  //   // setCheck((checks) => Object.keys(checks).reduce(
  //   //   (newCheck, checkKey) => ({
  //   //     ...newCheck,
  //   //     [checkKey]: checked,
  //   //   }),
  //   //   {}
  //   // )
  //   // );

  //   //reduce() 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환하는 함수입니다.
  //   //reduce() 함수가 호출되면 첫 번째 순회 단계에서 accumulator 값은 initialValue로 설정되거나 배열의 첫 번째 요소로 설정된다. 
  //   //위 코드에서는 초기 값이 0이 주어졌으므로 처음 누적된 accumulator의 값은 0부터 시작한다.
  //   //newCheck 객체에 checkKey를 추가합니다.
  //   //checkKey 속성의 값을 checked로 설정합니다.
  //   //따라서 위 코드는 checks 객체의 각 속성 이름에 대해 checked 속성 값을 true로 설정합니다.
  //   // setAllCheck(checked);

  // }

  // useEffect(() => {

  //   checkFunction()

  // }, [allCheck])

  // const checkFunction = (e) => {

  //   if (allCheck === false) {

  //     setCheck([{ "q": true }, { "w": true }, { "e": true }, { "r": true }, { "t": true }])

  //   } else if (allCheck === true) {

  //     setCheck([{ "q": false }, { "w": false }, { "e": false }, { "r": false }, { "t": false }])

  //   }

  // }

  // const handleChange = (e) => {

  //   const { checked } = e.target

  //   console.log(checked);

  // }

  return (
    <>
      {userInfo ? (
        <>
          <section className="cart_section_wrap">
            <h2>장바구니 리스트</h2>
            <p className="cart_section_all_select_checkbox"><label>전체동의 선택항목에 대한 동의 포함</label><input type="checkbox" name="all" /></p>
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
                  <div className="cart_list_button_wrap">
                    <BookCheckBox price={lst.price} deli={lst.deli} getQty={getQty} qty={lst.qty} cid={lst.cid} />
                    {/* 함수를 넘기면 값을 받아와서 사용할 수 있음 */}
                    <button
                      variant="danger"
                      type="button"
                      className="cart_list_delete_btn"
                      data-id={lst.cid}
                      onClick={handleDelete}> {/* 이벤트.target.dataset.id */}
                      삭제</button>
                    <p>
                      <label>선택하여삭제</label>
                      <input type="checkbox" />
                    </p>
                  </div>
                </li>
              )}
            </ul>
            <Pagination className="d-flex justify-content-center"
              current={currentPage}
              total={totalCount}
              pageSize={pageSize}
              onChange={(page) => setCurrentPage(page)}
            />
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