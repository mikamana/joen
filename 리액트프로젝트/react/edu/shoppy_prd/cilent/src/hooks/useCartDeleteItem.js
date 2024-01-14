import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function useCartDeleteItem(buttonRef,userInfo,cid){


  useEffect(()=>{
  
          //삭제버튼 이벤트
  const handleDelete = async (e) => {
    const check = window.confirm("정말로 삭제하시겠습니까?")

    if(check){
      try {
        await axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${cid}`)
          .then((result) => {
  
            if(check){
              window.location.reload();
            }else{
  
            }
          })
          .catch();
      } catch (error) {
      }
    }else{
      alert('삭제를 취소하였습니다.')
    }
    
  }

  if(buttonRef && buttonRef.current){
    buttonRef.current.addEventListener('click', handleDelete);
    // button요소가 있다면 클릭이벤트를 실행시켜준다.
  }

  },[buttonRef])

}