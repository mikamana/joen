import React from "react";


export default function BookImage(props) {

  return (

    <>
      <fieldset className="book--content__imgwrap">
        <img className="book--content__img" src={props.image} alt="이미지" />
        <button className="book--content__img--button">미리보기</button>
      </fieldset>
    </>

  )

}