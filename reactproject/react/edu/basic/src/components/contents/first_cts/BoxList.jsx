import React from "react";
import ContentInfo from "./ContentInfo";

export default function BoxList(props){

  return(

    <>
      <div className="div_wrap">
        <div className="text_wrap">
          <h2 className="content_title">{props.name}</h2>
          <span className="more_add">더보기</span>
        </div>
        <ul>
          <li>
            <ContentInfo />
          </li>
          <li>
            <ContentInfo />
          </li>
        </ul>
      </div>
    </>

  )

}