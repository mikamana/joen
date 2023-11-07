import React from "react";

export default function BookAvata({image}){
  return(
    <div className="bookavata">
      <img className="bookavata_image" 
          src = {image} />               
      <button type="button" className="bookavata_button">미리보기</button>    
    </div>
  );
}