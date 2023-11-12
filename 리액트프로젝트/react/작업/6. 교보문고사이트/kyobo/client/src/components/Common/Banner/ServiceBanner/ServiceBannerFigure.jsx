import React from "react";
import "../../../../css/Common/banner/banner.css";
import { Link } from "react-router-dom";
export default function ServiceBannerFigure(props) {

    return (
        <>
            <Link to="#" className="service_banner--list--a">
                {props.name}
            </Link>
        </>
    )

};