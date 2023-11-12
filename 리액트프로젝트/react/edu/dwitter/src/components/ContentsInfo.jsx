import React from "react";
import ButtonBox from "./ButtonBox";


export default function ContentsInfo(props){

  return(

    <>
      <img src={props.image} alt="#"/>
      <span className="contents_name">{props.name}</span>
      <a href="das">{props.id}</a>
      <span>{props.date}</span>
      <ButtonBox 
            onClick ={props.onClick}
      />
      <p>{props.info}</p>
    </>

  );

}