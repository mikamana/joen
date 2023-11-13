import React from "react";



export default function BookDeDate(props) {

  return (

    <>
      <p className="book--content__event--p">
        <span className="book--content__event--span">{props.deDate} 도착 예정</span>
      </p>
    </>

  )

}