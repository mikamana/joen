import React from "react";



export default function BookPrice(props){

  return(

    <>
        <p className="book--content__text_price">
          <span className="book--content__text_price--span">{props.price} </span> <span className="book--content__text_total_price--span">{props.totalprice}</span> <span className="book--content__text_discount--span">{props.discount}</span>
        </p>  
    </>

  )

}