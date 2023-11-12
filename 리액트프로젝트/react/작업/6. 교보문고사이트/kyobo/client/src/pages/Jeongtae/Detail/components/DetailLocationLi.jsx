import React from "react";
import "../../../../css/Jeongtae/Detail/detail.css";
import "../../../../css/Common/Mixin/common.css";
import "../../../../css/Common/Mixin/mixin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function DetailContents() {

    return (

        <>
            <li className="detail-product__location--li">
                <a href="#" ><i><FontAwesomeIcon icon={faHouse} /></i></a>
            </li>
            <li className="detail-product__location--li">
                <a href="#" className="detail-product__location--a">국내도서</a>
            </li>
            <li className="detail-product__location--li">
                <a href="#" className="detail-product__location--a">인문</a>
            </li>
            <li className="detail-product__location--li">
                <a href="#" className="detail-product__location--a">인문학일반</a>
            </li>
            <li className="detail-product__location--li">
                <a href="#" className="detail-product__location--a">인문교양</a>
            </li>
        </>

    );

}