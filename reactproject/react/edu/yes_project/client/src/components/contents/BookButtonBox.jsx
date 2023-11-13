import React from "react";
import BookButton from "./BookButton";
import BookCheckBox from "./BookCheckBox";

export default function BookButtonBox() {

  return (

    <>
      <div className="book--content__text_button--div">
        <BookCheckBox />
        <BookButton />
      </div>
    </>

  )

}