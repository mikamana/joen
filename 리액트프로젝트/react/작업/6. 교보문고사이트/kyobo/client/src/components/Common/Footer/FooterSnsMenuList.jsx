import React from "react";
import { Link } from "react-router-dom";
export default function FooterSnsMenuList() {

    return (

        <>
            <div className="footer_sns_list_box">
                <Link to="#" className="footer_sns__link-ytb">
                    <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/btn_footer_sns_youtube@2x.png" alt="유튜브아이콘" />
                </Link>
                <Link to="#" className="footer_sns__link-ytb">
                    <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/btn_footer_sns_fb@2x.png" alt="유튜브아이콘" />
                </Link>
                <Link to="#" className="footer_sns__link-ytb">
                    <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/btn_footer_sns_insta@2x.png" alt="유튜브아이콘" />
                </Link>
            </div>
        </>

    )

};