import React from "react";



export default function SearchWrap() {

    return (

        <>
            <section className="search__wrap--section">
                <div className="search_wrap--box inner">
                    <h1 className="search__wrap--logo">
                        <a href="#">
                            <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_logo_kyobo@2x.png" alt="로고" />
                        </a>
                    </h1>
                    <div className="search_wrap--gnb">
                        <div className="search_wrap--form_sel">
                            <select title="검색유형선택" id="gbcode">
                                <option value="TOT">통합검색</option>
                                <option value="TOT">교보문고</option>
                                <option value="TOT">eBook</option>
                                <option value="TOT">sam</option>
                                <option value="TOT">핫트랙스</option>
                            </select>
                            <div className="search_wrap--input">
                                <input type="text" placeholder="'휴남동 서점' 황보름 신작" />
                            </div>
                            <a href="#">검색</a>
                        </div>
                    </div>
                    <ul className="search_wrap__user_menu--input">
                        <li className="search_wrap__user_menu_li">
                            <a href="#">
                                <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/btn_header_cart@2x.png" alt="장바구니이미지" />
                            </a>
                        </li>
                        <li className="search_wrap__user_menu_li">
                            <a href="#">
                                <img src="https://contents.kyobobook.co.kr/resources/fo/images/common/ink/btn_header_my@2x.png" alt="마이페이지이미지" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>

    );

}
