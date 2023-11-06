import React from "react";
import "../../../../css/Common/banner/banner.css";
export default function ServiceBannerFigure(props) {

    return (
        <>
            <a href="#" className="service_banner--list--a">
                {props.name}
            </a>
        </>
    )

};