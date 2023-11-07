import React, { Children } from "react";

export default function BookContents({children}){

  return(

    <>
      <div className="book--content__box">
        {children}
      </div>
    </>

  )

}