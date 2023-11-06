import React from "react";



export default function GnbWrap() {

    return (

        <>
            <section className="header__gnb_wrap--section">
                <div className="gnb_wrap--innerbox inner">
                    <button className="gnb_wrap__button--menu">
                        메뉴
                    </button>
                    <nav className="gnb_wrap__mainmenu--nav">
                        <ul className="gnb_wrap__menulist--ul">
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <em>읽카탈</em>
                                    <span className="ico_new"></span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <em>노벨문학상</em>
                                    <span className="ico_new"></span>

                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>베스트</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>신상품</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>이벤트</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>사은품</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>PICKS</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>CASTing</span>
                                </a>
                            </li>
                            <li className="gnb_wrap__menulist_li">
                                <a href="#">
                                    <span>교보ONLY</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>

    );

}