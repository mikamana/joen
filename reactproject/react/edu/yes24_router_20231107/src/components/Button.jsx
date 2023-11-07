import React from "react";

export default function Button({className, buttonName}){
  return(
    <button type="button" className={className}>{buttonName}</button>
  );
}