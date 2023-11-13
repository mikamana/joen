import React from "react";



export default function BookPrice(props) {

  return (

    <>
      <p className="book--content__text_price">
        <span className="book--content__text_price--span">{props.price}원 </span>
        <span className="book--content__text_total_price--span">최종가격 : {props.totalPrice}원</span>
        <span className="book--content__text_point--span">포인트 {props.point}</span>
      </p>
    </>

  )

}