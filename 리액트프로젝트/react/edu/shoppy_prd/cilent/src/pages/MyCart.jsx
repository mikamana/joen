import React, { useEffect, useRef, useState } from "react";
import { getUser } from '../util/localStorage';
import NotFound from '../pages/NotFound';
import Table from 'react-bootstrap/Table';
//페이징 처리
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.css';
import 'rc-pagination/assets/index.css';
import CartItem from "../components/CartItem";
import useOrder from "../hooks/useOrder";
import { useNavigate } from "react-router-dom";
import { cartListFetchData } from "../API/cartAPI.js";
import { useDispatch, useSelector } from "react-redux";
import { getCartListData } from "../modules_redux/reduxSelector.js";

export default function MyCart() {
  const userInfo = getUser();
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 1. dispatch => API :: Axios 액션 함수 -> cartsAPI (여기서 만들어진 함수를 호출하여 사용)
  const { cartList, totalCount, totalPrice, pageSize, qtyUpdateFlag, remove } = useSelector(getCartListData);

  useEffect(() => {

    if (remove && totalCount % 3 === 0 && totalCount !== 0 && currentPage !== 1) {

      setCurrentPage(currentPage - 1);

      /*  console.log('current' + currentPage);
          console.log('totalCount' + totalCount);
          console.log('remove' + remove); */

    }

  }, [remove]);

  useEffect(() => {

    dispatch(cartListFetchData({ currentPage, userInfo, totalCount, remove }));

    // total 개수 -1
    // total을 3나눈 배수값이면 page를 하나 뺀다.

  }, [currentPage, qtyUpdateFlag, totalCount]);

  const { handleOrder } = useOrder(cartList);


  return (
    <>
      {userInfo ? (
        <div className="style">
          <h3><img src="/images/cart_img.gif" />My Cart!!</h3>
          <h4>{`${qtyUpdateFlag} ${remove}`}</h4>
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
              {cartList && cartList.map((cart) =>
                <CartItem cart={cart} key={cart.cid} userInfo={userInfo} />
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
            <label>총 상품가격 </label><span className="tot_font_style">{totalPrice.toLocaleString()} 원</span>
            <label>+ 총 배송비 </label><span className="tot_font_style">0원</span>
            <label>= 총 주문금액 </label><span className="tot_order_font_style">{totalPrice.toLocaleString()} 원</span>
          </div>
          <div className="order">
            <button type="button" onClick={() => navigate('/products')}>계속쇼핑</button>
            <button type="button" onClick={() => { handleOrder() }}>주문하기</button>
          </div>
        </div >
      ) : (
        <NotFound />
      )
      }
    </>
  );
}