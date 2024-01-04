

const init = {

  success:false

}


export const reduxDelete = (state=init,action) =>{


  switch (action.type) {
    case "FETCH_DELETE_SUCCESS" : 
    return {
      success:action.success
    }
    default :  
    return {
      success:false
    }
  }



}