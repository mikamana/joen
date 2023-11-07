import React from "react";




export default function DetailProductBox(){

  return(

    <>
      <div className="detail-product__box">
        <div className="detail-product__title--div">
            <h2 className="detail-product__title--h2">
                <span className="detail-product__label--span">
                    예약판매
                </span>
                <span className="detail-product__content--span">
                    채사장의 지대넓얕 8: 개인 VS 사회
                </span>
            </h2>
        </div>
        <div className="detail-product__boxlist--div">
            <div className="detail-product__leftbox--div"></div>
            <div className="detail-product__centerbox--div"></div>
            <div className="detail-product__rightbox--div"></div>
        </div>
      </div>
    </>

  );

}