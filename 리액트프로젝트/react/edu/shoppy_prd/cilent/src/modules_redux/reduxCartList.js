/*

  MyCart 호출 : DB에서 장바구니 리스트 출력 이벤트(액션)
  -> dispatch(장바구니 DB에서 가져오는 API 호출 :: Action Reducer)
  -> dispaych(action을 이용하여 store에 전달 :: Action Reducer)
  -> useSelector(reselect를 import한 함수 :: 렌더링의 효율적인 처리)
  -> selector 함수에서 전달하는 데이터 출력

  //thunk의 역할 : dispatch 비동기 처리를 위해서 dispatch가 여러번 호출될 떄 자동으로 연결해주는 역할을 하는 라이브러리가 react-thunk
  //전체 

*/

const init = {

  cartList:null,
  totalCount:0,
  totalPrice:0,
  pageSize:0

}

export default function reduxCartList(state=init, action){

  switch(action.type){

    case 'FETCH_DATA_SUCCESS' :
      return {
        ...state,
        cartList : action.cartList,
        totalCount: action.totalCount,
        totalPrice: action.totalPrice,
        pageSize: action.pageSize
      }
      default : 
        return{
          cartList:null,
          totalCount:0,
          totalPrice:0,
          pageSize:0
        }

  }

}