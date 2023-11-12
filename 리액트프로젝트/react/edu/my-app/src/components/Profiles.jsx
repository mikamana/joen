import React from "react";
import { Avata } from "./Avata";


export function Profiles({image}){

  return(

    <>
      <Avata image={image}/>
      <img src={image} alt="#"/>
    </>

  )

}