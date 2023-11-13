import React from "react";



export default function BookTitle(props) {

  return (

    <>
      <p className="book--content__text_bookname">
        <span className="book_kind">
          [{props.kind}]
        </span>
        <span>
          {props.title}
        </span>
      </p>
    </>

  )

}