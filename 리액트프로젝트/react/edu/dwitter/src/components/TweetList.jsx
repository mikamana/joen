import React from "react";
import Join from "./Join";


export default function TweetList(props){

  return(

    <>
      <li key="1">All Tweets</li>
      <li key="2">My Tweets</li>
      <li key="3">
        <Join onClick={props.onClick}/>
      </li>
    </>

  );

}