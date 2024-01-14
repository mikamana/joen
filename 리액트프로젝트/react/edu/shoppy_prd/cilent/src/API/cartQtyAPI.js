import axios from "axios";

export const cartQtyFetchData = (userInfo,cart,check) =>{

  return async (dispatch) =>{

    if(check !== null){

      await axios({
        method: "put",
        url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cart.cid}/${check}`
      })
      .then((result)=>{
        dispatch({
          // dispatch 호출할 떄 rootReducer에 있는 모든 reducer들에 적용이 된다.
          // 즉 action의 type은 유니크해야한다.
          // redux 툴킷에서는 이런 문제를 해결해준다.
          type:'FETCH_QTY_SUCCESS',
          qtyUpdateFlag: true
          
        });
      }).catch()

        
    }


  }


}