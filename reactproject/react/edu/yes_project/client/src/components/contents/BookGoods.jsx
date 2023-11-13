import React from "react";



export default function BookGoods(props) {

  return (

    <>
      <p className="book--content__event--p">
        <span className="book--content__event--span">{props.goods}</span>
      </p>
    </>

  )

}