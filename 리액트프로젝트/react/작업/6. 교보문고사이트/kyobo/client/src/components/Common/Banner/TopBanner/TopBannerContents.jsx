import React from "react";
import "../../../../css/Common/banner/banner.css";
import { Link } from "react-router-dom";

export default function TopBanner(props) {

    return (

        <>
            <Link to="/detail">
                <span className="top_banner--text-span">
                    {props.subtitle}
                </span>
                <em className="top_banner--text-em">
                    {props.title}
                </em>
                <img src={process.env.PUBLIC_URL + './images/common/main/TopBanner/topbanner_chrt.png'} alt="이미지1" />
            </Link>
        </>

    )

};