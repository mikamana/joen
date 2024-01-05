import {createSlice} from "@reduxjs/toolkit";

const initialState = {

  success:false
  
}


/* export const reduxDelete = (state=init,action) =>{

  name:'cartDelete', */


  /* switch (action.type) {
    case "FETCH_DELETE_SUCCESS" : 
    return {
      success:action.success
    }
    default :  
    return {
      success:false
    }
  } */
  
/* } */

export const cartListDelete = createSlice({

  name:'cartDelete',
  initialState,
  reducers:{
    fnDelete(state,action){
        state.success = action.payload
    }
  }
  

});

export const {fnDelete} = cartListDelete.actions;
export default cartListDelete.reducer;