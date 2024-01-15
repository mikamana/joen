import {createSelector} from "@reduxjs/toolkit";

const getCartList = (state) => state.reduxCartList.list.cartList;
const getTotalCount = (state) => state.reduxCartList.list.totalCount;
const getTotalPrice = (state) => state.reduxCartList.list.totalPrice;
const getPageSize = (state) => state.reduxCartList.list.pageSize;
const getQtyFlag = (state) => state.reduxQtyList.qtyUpdateFlag;
const getDelete = (state) => state.reduxDelete.success;

// export const test = createSelector(()=> console.log('11'));
// export const test = createSelector(()=> {

//   //로직추가
//   return{100}

// })

export const getCartListData = createSelector(

  [getCartList,getTotalCount,getTotalPrice,getPageSize,getQtyFlag,getDelete],
  (cartList,totalCount,totalPrice,pageSize,qtyUpdateFlag,remove)=>{

    if(remove){
      totalCount = totalCount - 1
    }
    return{
      cartList,
      totalCount,
      totalPrice,
      pageSize,
      qtyUpdateFlag,
      remove
    }

  }

)


