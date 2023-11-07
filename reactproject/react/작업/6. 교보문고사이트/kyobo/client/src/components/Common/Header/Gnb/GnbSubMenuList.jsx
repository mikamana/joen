import React from "react";
import { Link } from "react-router-dom";
import GnbSubMenuButton from "./GnbSubMenuButton";
export default function GnbSubMenuList() {

    return (
        <>
            <ul className="gnb_wrap__submenu--ul">
                <li className="gnb_wrap__submenu--li">
                    <Link to="#" className="gnb_wrap__submenu--link">
                        할인혜택
                    </Link>
                </li>
                <li className="gnb_wrap__submenu--li">
                    <Link to="#" className="gnb_wrap__submenu--link">
                        출석체크
                    </Link>
                </li>
                <li className="gnb_wrap__submenu--li">
                    <GnbSubMenuButton />
                </li>
            </ul>
        </>
    )

};