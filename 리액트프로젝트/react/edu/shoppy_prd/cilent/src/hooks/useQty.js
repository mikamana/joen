import useCart from "./useCart";

// 데이터에서 받아온 totPrice와 qty를 계산하여 곱한 값을 MyCart 컴포넌트에 뿌려야함


export default function useQty(qty,flag,cd){

  function updateQty(cid, checkFlag) {
    //http://127.0.0.1:8000/carts/:고객아이디/:장바구니아이디/:상태값
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${checkFlag}`
    })
      .then((result) => alert(result.data))
      .catch();

  }

  if (flag === 'plus') {
    if (flag) {
      updateQty(cd, flag); //DB에서 수량 변경 ++
      // setTotPrice(totPrice + parseInt(e.price));
      // setTotOrderPrice(totPrice + parseInt(e.price));
    }
  } else {
    if (flag) {
      updateQty(cd, flag); //DB에서 수량 변경 --
      // setTotPrice(totPrice - parseInt(e.price));
      // setTotOrderPrice(totPrice - parseInt(e.price));
    }
  }


  return  [] 

}