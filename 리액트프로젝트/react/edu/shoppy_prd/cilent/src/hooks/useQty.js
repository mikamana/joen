import axios from "axios";
import { useEffect, useState } from "react";
// 데이터에서 받아온 totPrice와 qty를 계산하여 곱한 값을 MyCart 컴포넌트에 뿌려야함
export default function useQty(number,cid,userInfo,numRef,type){

  useEffect(()=>{

    if (type === 'minus') {
      if (number === 1) {
        alert('최소 1개 이상');
      } else {
        //DB업데이트
        axios({
          method: "put",
          url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${type}`
        })
          .then((result) => window.location.reload())
          .catch();
      }
    } else if (type === 'plus') {
      //최대10개
      if (number === 10) {
        alert('최대 10개');
      } else {
        //DB업데이트
        axios({
          method: "put",
          url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${type}`
        })
          .then((result) => window.location.reload())
          .catch();
      }
    }

  },[type])

}