import axios from "axios";
import { fnDelete } from "../modules_redux/reduxDelete";


export const cartDeleteBtn = (userInfo,cid) =>{

  return async (dispatch) =>{


      await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${cid}`)
        .then((result) => {

          dispatch(fnDelete(true));

        }).catch();

    }


  }