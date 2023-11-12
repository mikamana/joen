import React from "react";



export default function Count(props){

  return(

    <>
        <p className="book--content__count--p">
          <span className="book--content__count--span">{props.count}</span>
        </p>
    </>

  )

}