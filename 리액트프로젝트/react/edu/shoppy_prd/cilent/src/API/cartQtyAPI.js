import axios from "axios";

export const cartQtyFetchData = (userInfo,cart,check) =>{

  return async (dispatch) =>{

    if(check !== null){

      await axios({
        method: "put",
        url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cart.cid}/${check}`
      })

      dispatch({

        type:'FETCH_QTY_SUCCESS',
        price: cart.price
        
      });
        
    }


  }


}