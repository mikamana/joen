import React from "react";

export default function BookButton(){

  const button = ["장바구니","바로구매","보관함"]

  return(

    <>
      {button.map((btn)=>
      
        <button className="book--content__text_button">{btn}</button>

      )}
    </>

  )

}

