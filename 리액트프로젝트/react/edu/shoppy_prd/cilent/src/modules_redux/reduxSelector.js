import {createSelector} from "reselect";


const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;
const getQtyFlag = (state) => state.reduxQtyList.qtyUpdateFlag;
const getDelete = (state) => state.reduxDelete.success;
const getIsLoading = (state) => state.reduxCartList.isLoading;

export const getCartListData = createSelector(

  [getCartList,getTotalCount,getTotalPrice,getPageSize,getQtyFlag,getDelete,getIsLoading],
  (cartList,totalCount,totalPrice,pageSize,qtyUpdateFlag,remove,isLoading)=>{

    if(remove){
      totalCount = totalCount - 1
    }
    return{
      cartList,
      totalCount,
      totalPrice,
      pageSize,
      qtyUpdateFlag,
      remove,
      isLoading
    }

  }

)


