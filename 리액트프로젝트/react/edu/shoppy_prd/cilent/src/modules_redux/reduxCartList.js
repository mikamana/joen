import {createSlice} from "@reduxjs/toolkit";

/*

  MyCart 호출 : DB에서 장바구니 리스트 출력 이벤트(액션)
  -> dispatch(장바구니 DB에서 가져오는 API 호출 :: Action Reducer)
  -> dispatch(action을 이용하여 store에 전달 :: Action Reducer)
  -> useSelector(reselect를 import한 함수 :: 렌더링의 효율적인 처리)
  -> selector 함수에서 전달하는 데이터 출력

  //thunk의 역할 : dispatch 비동기 처리를 위해서 dispatch가 여러번 호출될 떄 자동으로 연결해주는 역할을 하는 라이브러리가 react-thunk
  //전체 

*/

const initialState = {

  list : {
  cartList:null,
  totalCount:0,
  totalPrice:0,
  pageSize:3
  }

}

// cartAPI로부터 받은 값을 store에 저장시킴
// 두번째 인자인 action은 dispatch의 값
// if나 switch를 사용하여 dispatch의 action.type의 값을 비교하여 return시켜준다.
// switch의 default값은 type이 FETCH_DATA_SUCCESS가 아닐 때 초기값으로 지정해줄 값
        // dispatch하는 모든 값들이 payload 객체안으로 자동으로 매칭해서 들어온다.
        // 들어온 값들이 state.list에 들어간다.
        // 호출할 때 state.payload.cartList
        // 
        // cartList : action.cartList;
        // totalCount: action.totalCount;
        // totalPrice: action.totalPrice;
        // pageSize: action.pageSize;
export const cartListSlice = createSlice({

  name:'cartList',
  initialState,
  reducers:{
    getFetchData(state,action){
      state.list = action.payload
    }
  }
  

});

export const {getFetchData} = cartListSlice.actions;
// export const {cartListSliceAction} = cartListSlice.actions;
export default cartListSlice.reducer;
// reducer는 정해져있는 키워드이다, reduers가 아님 

/* export default function reduxCartList(state=initialState, action){

  switch(action.type){

    case 'FETCH_DATA_SUCCESS' :
      return {
        cartList : action.cartList,
        totalCount: action.totalCount,
        totalPrice: action.totalPrice,
        pageSize: action.pageSize,
      }
      default : 
        return state

  }

} */