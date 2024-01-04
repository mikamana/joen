import axios from "axios";


export const cartDeleteBtn = (userInfo,cid) =>{

  return async (dispatch) =>{


      await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${cid}`)
        .then((result) => {

          dispatch({

            type:"FETCH_DELETE_SUCCESS",
            success:true
    
          });

        }).catch();

    }


  }

