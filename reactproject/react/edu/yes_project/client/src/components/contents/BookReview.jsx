import React from "react";



export default function BookReview(props) {

  return (

    <>
      <p className="book--content__text_price">
        <span>판매지수 : {props.saleIndex}</span>
        <span>리뷰 수 : {props.review} </span>
      </p>
    </>

  )

}