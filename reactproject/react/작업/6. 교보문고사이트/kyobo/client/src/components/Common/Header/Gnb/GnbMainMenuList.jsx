import React from "react";
import { Link } from "react-router-dom";

export default function GnbMainMenuList() {

    return (
        <>
            <ul className="gnb_wrap__menulist--ul">
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <em>읽카탈</em>
                        <span className="ico_new"></span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <em>노벨문학상</em>
                        <span className="ico_new"></span>
                    </Link >
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>베스트</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>신상품</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>이벤트</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>사은품</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>PICKS</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>CASTing</span>
                    </Link>
                </li>
                <li className="gnb_wrap__menulist_li">
                    <Link to="#" className="gnb_wrap__menulist_link">
                        <span>교보ONLY</span>
                    </Link>
                </li>
            </ul>
        </>
    )

};