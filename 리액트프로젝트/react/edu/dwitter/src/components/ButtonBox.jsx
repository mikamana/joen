import React from "react";

export default function ButtonBox(props) {

  return (

    <>
      <button>삭제</button>
      <button onClick={() => {

        // updateHandler()
        props.onClick()

      }}>편집</button>
    </>

  )

}