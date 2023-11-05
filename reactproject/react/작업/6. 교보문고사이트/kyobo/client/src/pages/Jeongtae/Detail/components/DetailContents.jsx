import React from "react";
import "../../../../css/Jeongtae/Detail/detail.css";
import "../../../../css/Common/Mixin/common.css";
import "../../../../css/Common/Mixin/mixin.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import DetailLocation from "./DetailLocation.jsx";
export default function DetailContents() {

    return (

        <>
            <main className="detail" id="detail">
                <section className="detail-product">
                    <div className="detail-product__container inner">
                        <nav className="detail-product__location--nav">
                            <ul className="detail-product__location--ul">
                                <DetailLocation />
                            </ul>
                        </nav>
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
                        <div className="detail-product__review_wrap--div">
                            <p className="detail-product__review_title--p">
                                <a href="#">리뷰&nbsp;
                                    <span className="detail-product__review_count--span">
                                        (344)
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>

    );

}