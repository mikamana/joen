import React from "react";



export default function BookPoint(props){

  return(

    <>
        <p className="book--content__text_point">
          <span className="book--content__text_point--span">포인트 {props.point}</span>
        </p>  
    </>

  )

}