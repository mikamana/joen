/* 장바구니 리스트 */

import axios from "axios";
import { useState } from "react";
import { getFetchData } from "../modules_redux/reduxCartList";
import { fnDelete } from "../modules_redux/reduxDelete";

export const cartListFetchData = ({currentPage,userInfo,totalCount,remove}) =>{



  let startIndex = 0;
  let endIndex = 0
  const pageSize = 3;

  if(remove && (totalCount % 3 )=== 0 && currentPage !== 1){

    currentPage = currentPage -1

  }  

  // return된 결과가 dispatch로 다시 store로 넘어감
  return async (dispatch) =>{
    // 콜백함수를 return 시킴 > dispatch를 통해서 reduxCartList에 연결 후 값을 보냄

    startIndex = (currentPage - 1) * pageSize + 1; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
    endIndex = currentPage * pageSize; //1*3 : 3, 6 ..


    const result = await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`);
    // 위처럼 변수형태로 사용하면 데이터가 변수에 담김, 사용할 때는 result.data
    /* if(remove){
      remove = false
    }else{
      remove = true
    } */

    let rows = result.data[0];
    // let totalCount = 0;
    let totalPrice = 0;
    if(rows !== undefined){
      totalCount = rows.cnt;
      totalPrice = rows.totalPrice;
    }
    let cartList = result.data;
    remove = false;

    // axios데이터가 자동으로 json 데이터로 변형시켜서 보내는지 확인해야함
    // result.data를 자바스크립트에서 사용할 수 있는 json형태로 바꿔주어 보냄
    // 서버 응답에 JSON 콘텐츠 유형이 포함되어있어 응답 데이터를 자바스크립트 객체로 자동 변환된다.
    // res.json이 json객체로 반환하여 응답해주는 형식
    // 서버로부터 받은 HTTP 응답 헤더에 'Content-Type'이라는 필드가 포함되어 있고, 그 값이 'application/json'이라는 의미입니다.
    // fetch를 사용할 경우 문자열로 return시켜주어 json으로 파싱해주고 사용해야한다.

    // 값을 바로 보내줄 수 없으므로 스토어에 저장하는 작업을 dispatch를 통해서 해야함 

      dispatch(
        getFetchData({
          cartList,
          totalCount,
          totalPrice,
          pageSize,
          remove
        })
      );

      dispatch(fnDelete(remove));

    }






  } 

