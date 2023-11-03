import React from "react";
import InfoIcon from "./IconInfo";
import PriceInfo from "./PriceInfo";
import ConInfo from "./ConInfo";
import ImageInfo from "./ImageInfo";

export default function ContentInfo(){

  return(

    <>
      <fieldset className="img_wrap"><ImageInfo /></fieldset>
      <p className="p_content"><ConInfo /></p>
      <p className="p_price"><PriceInfo /></p>
      <p className="p_icon"><InfoIcon /></p>
    </>

  )

}