import axios from "axios"

export default function useQty2(){

  const updateCartQty = async (cid,userInfo,type) => {

    // 커스텀훅안에서 변수형 함수를 통해 커스텀훅을 호출할 수는 있지만 커스텀훅은 다른 커스텀훅에서 호출 X    
    // 순수 자바스크립트 함수에서는 커스텀훅을 호출 X

    axios({
      method: "put",
      url: `http://127.0.0.1:8000/carts/${userInfo.id}/${cid}/${type}`
    })
    // .then((result) => window.location.reload())
    // .catch();
    window.location.reload();

  }

  return  {updateCartQty} 

}