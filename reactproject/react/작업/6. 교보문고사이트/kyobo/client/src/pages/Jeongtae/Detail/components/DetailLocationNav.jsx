import React from "react";
import "../../../../css/Jeongtae/Detail/detail.css";
import "../../../../css/Common/Mixin/common.css";
import "../../../../css/Common/Mixin/mixin.css";
import DetailLocationLi from "./DetailLocationLi";

export default function DetailContents() {

    return (

        <>
            <nav className="detail-product__location--nav">
                <ul className="detail-product__location--ul">
                    <DetailLocationLi />
                </ul>
            </nav>
        </>

    );

}