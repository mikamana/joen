const init = {

  qtyUpdateFlag:false

}

// dispatch로 넘어온 값의 이름을 넣고 return 시켜주어야함

export default function reduxQtyList(state=init, action){

  switch(action.type){

    case 'FETCH_QTY_SUCCESS' :
      return {
        qtyUpdateFlag:action.qtyUpdateFlag
      }
      default : 
        return{
          qtyUpdateFlag:false
        }

  }  

}

