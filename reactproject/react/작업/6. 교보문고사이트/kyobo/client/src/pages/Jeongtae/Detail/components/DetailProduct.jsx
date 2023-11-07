import React from "react";
import DetailLocationNav from "./DetailLocationNav";
import DetailProductBox from "./DetailProductBox";
import DetailReviewBox from "./DetailReviewBox";

export default function DetailProduct(){

  return(

    <>
      <section className="detail-product">
        <div className="detail-product__container inner">
            <DetailLocationNav />
            <DetailProductBox />
            <DetailReviewBox />
        </div>
      </section>
    </>

  );

}