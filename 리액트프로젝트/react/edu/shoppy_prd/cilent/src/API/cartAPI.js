/* 장바구니 리스트 */

import axios from "axios";
import { useEffect } from "react";

export const cartListFetchData = (currentPage,userInfo) =>{

  // 가져온 데이터를 다시 dispatch해야함

  let startIndex = 0;
  let endIndex = 0;
  const pageSize = 3;

  startIndex = (currentPage - 1) * pageSize + 1; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
  endIndex = currentPage * pageSize; //1*3 : 3, 6 ..

  // return된 결과가 dispatch로 다시 store로 넘어감
  return async (dispatch) =>{

    const result = await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`);
    // 받아온 데이터가 result에 들어감

    const cartList = JSON.parse(JSON.stringify(result.data));
    const totalCount = result.data[0].cnt;
    const totalPrice = result.data[0].totalPrice;

    // 값을 바로 보내줄 수 없으므로 스토어에 저장하는 작업을 dispatch를 통해서 해야함 

      dispatch({

        type:'FETCH_DATA_SUCCESS',
        cartList,
        totalCount,
        totalPrice,
        pageSize
  
      });




  } 

}