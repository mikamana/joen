import React from "react";
import BookCheckCount from "./BookCheckCount";

export default function BookCheckBox(props) {


  return (

    <>
      <div className="book--content--checkbox--div">
        <BookCheckCount price={props.price} deli={props.deli} getQty={props.getQty} qty={props.qty} />
      </div>
    </>

  );

}