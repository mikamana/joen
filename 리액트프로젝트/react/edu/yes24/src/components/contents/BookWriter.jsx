import React from "react";



export default function BookWriter(props){

  return(

    <>
        <p className="book--content__text_writer_wrap">
          <span className="book--content__text_writer">{props.writer}|</span> <span className="book--content__text_publish">{props.publish}</span> | <span className="book--content__text_date">{props.date}</span>
        </p>
    </>

  )

}