import React from "react";
import { IconSale, IconCoupon, IconDelivery } from "./IconInfo";
import PriceInfo from "./PriceInfo";
import ConInfo from "./ConInfo";
import ImageInfo from "./ImageInfo";

export default function ContentInfo(props) {

  return (

    <>
      <fieldset className="img_wrap"><ImageInfo image={props.image} /></fieldset>
      <p className="p_content"><ConInfo content={props.content} /></p>
      <p className="p_price"><PriceInfo
        price={props.price}
        totalPrice={props.totalPrice}
      />
      </p>
      <p className="p_icon">
        <IconSale sale="세일" />
        <IconCoupon coupon="쿠폰" />
        <IconDelivery delivery="배송무료" />
      </p>
    </>

  )

}