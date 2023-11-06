import React from "react";
import "../../../../css/Common/banner/banner.css";
export default function ServiceBannerLoginMenuList() {
    const loginList = ["회원가입", "로그인", "회원혜택∨", "고객센터"]

    return (
        <>
            {loginList.map((login) =>
                <li className="service_banner--loginlist--li">
                    <a href="#">
                        {login}
                    </a>
                </li>
            )}
        </>
    )

};