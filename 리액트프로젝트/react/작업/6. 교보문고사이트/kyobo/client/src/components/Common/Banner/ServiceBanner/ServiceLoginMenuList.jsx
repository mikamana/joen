import React from "react";
import "../../../../css/Common/banner/banner.css";
import { Link } from "react-router-dom";
export default function ServiceBannerLoginMenuList() {
    const loginList = ["회원가입", "로그인", "회원혜택", "고객센터"]

    return (
        <>
            {loginList.map((login) =>
                <li className="service_banner--loginlist--li">
                    <Link to="#" className="service_banner--loginlist--a">
                        {login}
                    </Link>
                </li>
            )}
        </>
    )

};