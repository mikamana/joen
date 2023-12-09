import React, { useEffect, useState } from "react";
import { getUser } from '../util/localStorage';
import NotFound from '../pages/NotFound';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Quantity from './../components/Quantity';
import { useNavigate } from "react-router-dom";

//페이징 처리
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.css';
import 'rc-pagination/assets/index.css';


export default function MyCart() {
  //페이징 처리
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const navigate = useNavigate();
  const userInfo = getUser();
  const [cartList, setCartList] = useState([]);
  const [totPrice, setTotPrice] = useState(0);
  const [totDeliprice, setTotDeliprice] = useState(0);
  const [totOrderPrice, setTotOrderPrice] = useState(0);
  const [qty, setQty] = useState(1);

  //수량 업데이트
  function updateQty(cid, checkFlag) {
    //http://127.0.0.1:8000/carts/:고객아이디/:장바구니아이디/:상태값
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${checkFlag}`
    })
      .then((result) => window.location.reload())
      .catch();
  }

  //Quantity 수량 이벤트
  const getQty = (e) => {
    // alert(JSON.stringify(e)); //수량, 상품가격, flag    
    setQty(e.qty);

    if (e.flag === 'plus') {
      if (e.qtyFlag) {
        updateQty(e.cid, e.flag); //DB에서 수량 변경 ++
        setTotPrice(totPrice + parseInt(e.price));
        setTotOrderPrice(totPrice + parseInt(e.price));
      }
    } else {
      if (e.qtyFlag) {
        updateQty(e.cid, e.flag); //DB에서 수량 변경 --
        setTotPrice(totPrice - parseInt(e.price));
        setTotOrderPrice(totPrice - parseInt(e.price));
      }
    }
  }

  /**
   * 장바구니 리스트 가져오기   
   */
  useEffect(() => {

    //startIndex, endIndex
    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * pageSize + 1; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
    endIndex = currentPage * pageSize; //1*3 : 3, 6 ..

    // alert(`startIndex--> ${startIndex}, endIndx --> ${endIndex}`);

    axios({
      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`
      // url : `http://127.0.0.1:8000/carts/${userInfo.id}`
    })
      .then((result) => {
        // alert(JSON.stringify(result.data));
        setCartList(result.data);
        setTotalCount(result.data[0].cnt);//총 데이터 개수가져와서 pagenation 속성에 기입

        //총 상품가격 구하기
        const newTotPrice = setNewTotPrice(result.data);
        const newTotOrderPrice = newTotPrice + totDeliprice;
        setTotPrice(newTotPrice);
        setTotOrderPrice(newTotOrderPrice);
      })
      .catch();
  }, [currentPage]);



  //총 상품가격 계산함수
  const setNewTotPrice = (cartList) => {
    return cartList.reduce((total, cart) => total + (cart.price * cart.qty), 0);
  }

  //삭제버튼 이벤트
  const handleDelete = async (e) => {
    const cid = e.target.dataset.id;
    alert(`cid ==>> ${cid}`);
    try {
      await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${cid}`)
        .then((result) => {
          // alert(JSON.stringify(result.data));
          window.location.reload();
        })
        .catch();
    } catch (error) {
    }
  }

  //주문하기
  const handleOrder = (e) => {
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

    //post 방식으로 서버에 전송
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
  }//handleOrder


  return (
    <>
      {userInfo ? (
        <div className="style">
          <h3><img src="/images/cart_img.gif" />My Cart!!</h3>
          <Table striped bordered hover >
            <thead>
              <tr className="align_style">
                <th>번호</th>
                <th>상품정보</th>
                <th>상품가격</th>
                <th>배송비</th>
                <th className="col_size">기타</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((cart) =>
                <tr>
                  <td className="align_style">{cart.rno}</td>
                  <td>
                    <img className="img_style" src={`http://127.0.0.1:8000/${cart.image}`} />
                    {cart.name}
                  </td>
                  <td className="align_style">{cart.price}</td>
                  <td className="align_style">0원</td>
                  <td className="align_style">
                    <Quantity qty={cart.qty} price={cart.price}
                      getQty={getQty} cid={cart.cid} />
                    <Button variant="danger"
                      type="button"
                      className="delete_style"
                      onClick={handleDelete} //이벤트.target.dataset.id
                      data-id={cart.cid}
                    >삭제</Button>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>

          <Pagination
            className="d-flex justify-content-center"
            current={currentPage}
            total={totalCount}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)} />

          <div className="tot_div_style">
            <label>총 상품가격 </label><span className="tot_font_style">{totPrice.toLocaleString()} 원</span>
            <label>+ 총 배송비 </label><span className="tot_font_style">{totDeliprice.toLocaleString()} 원</span>
            <label>= 총 주문금액 </label><span className="tot_order_font_style">{totOrderPrice.toLocaleString()} 원</span>
          </div>
          <div className="order">
            <button type="button" onClick={() => navigate('/products')}>계속쇼핑</button>
            <button type="button" onClick={handleOrder}>주문하기</button>
          </div>
        </div>
      ) : (
        <NotFound />
      )
      }
    </>
  );
}