import React from "react";



export default function BookTitle(props){

  return(

    <>
        <p className="book--content__text_bookname">
        {props.title}
        </p>
    </>

  )

}