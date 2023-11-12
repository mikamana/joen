import React from "react";
import { Link } from "react-router-dom";

export default function SearchLogo() {

    return (
        <>
            <h2 className="footer--logo">
                <Link to="#" className="search__wrap--logo--link">
                    <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_logo_kyobo@2x.png" alt="로고" />
                </Link>
            </h2>
        </>
    )

};