import useCart from "./useCart";

// 데이터에서 받아온 totPrice와 qty를 계산하여 곱한 값을 MyCart 컴포넌트에 뿌려야함


export default function useQty(qty){

  // const [] = useCart(qty);  

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


  return  [] 

}