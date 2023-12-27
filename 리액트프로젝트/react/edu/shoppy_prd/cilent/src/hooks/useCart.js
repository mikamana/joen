import axios from "axios";
import { useEffect, useState } from "react";

export default function useCart(currentPage,userInfo){

    const [totalCount, setTotalCount] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const [cartList, setCartList] = useState([]);

    const [totPrice, setTotPrice] = useState(0);
    const [totDeliprice, setTotDeliprice] = useState(2500);
    const [totOrderPrice, setTotOrderPrice] = useState(0);
    
    // const setNewTotPrice = (cartList) => {
    //   return cartList.reduce((total, cart) => total + (cart.price * cart.qty), 0);
    // }

    useEffect(() => {
      //startIndex, endIndex
      let startIndex = 0;
      let endIndex = 0;
      startIndex = (currentPage - 1) * pageSize + 1; //1-1*3+1 : 1, 4 .. 몇번째 데이터부터 몇개를 보여줄 것인지(데이터기준)
      endIndex = currentPage * pageSize; //1*3 : 3, 6 ..
    
      axios({
        method: "get",
        url: `http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${endIndex}`
      })
        .then((result) => {
            setCartList(result.data);
            const rows = result.data[0];
            (rows === undefined ) ? setTotalCount(0) : setTotalCount(result.data[0].cnt);//총 데이터 개수가져와서 pagenation 속성에 기입, 객체가 있어야만 작동
            //총 상품가격 구하기
            setTotPrice(result.data[0].totalPrice);
            setTotOrderPrice(result.data[0].totalPrice + totDeliprice);            
  
        })
        .catch();
    }, [currentPage]);

    return [cartList,totalCount,pageSize,totPrice,totDeliprice,totOrderPrice]
    // return으로 주는 값과 받는 값의 파라미터 순서가 같아야함 

}