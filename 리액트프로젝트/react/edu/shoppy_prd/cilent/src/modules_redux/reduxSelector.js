import {createSelector} from "reselect";


const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;
const getPrice = (state) => state.reduxQtyList.price;

export const getCartListData = createSelector(

  [getCartList,getTotalCount,getTotalPrice,getPageSize,getPrice],
  (cartList,totalCount,totalPrice,pageSize,price)=>({
    cartList,
    totalCount,
    totalPrice,
    pageSize,
    price
  })

)


