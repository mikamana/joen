import React from "react";



export default function BookEvent(props){

  return(

    <>
        <p className="book--content__event--p">
          <span className="book--content__event--span">{props.event}</span>
        </p>
    </>

  )

}