import React from "react";
import "../../../../css/Common/banner/banner.css";
import ServiceBannerFigure from "./ServiceBannerFigure";

export default function ServiceBannerBoxMore() {

    const figureList = ["eBook", "sam", "핫트랙스", "매장안내", "톡소다", "스토리 †", "브랜드 더보기 †"];

    return (

        <>
            <nav className="service_banner--morebox">
                <ul className="service_banner--list--ul">
                    {figureList.map((list) =>
                        <li className="service_banner--list--li">
                            <ServiceBannerFigure name={list} />
                        </li>
                    )}
                </ul>
            </nav>
        </>
    );

}