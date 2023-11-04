import React from "react";


export default function PriceInfo(props) {

  return (

    <>
      <span>{props.price}</span>
      <em>{props.totalPrice}</em>
    </>

  );

}