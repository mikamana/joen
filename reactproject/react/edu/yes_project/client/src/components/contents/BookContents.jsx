import React, { Children } from "react";

export default function BookContents({ children }) {

  return (

    <>
      <div className="book--content__box">
        <ul className="book--content_list-ul">
          {children}
        </ul>
      </div>
    </>

  )

}