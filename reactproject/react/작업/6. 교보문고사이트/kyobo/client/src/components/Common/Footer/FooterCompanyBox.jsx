import React from "react";
import FooterCompanyList from "./FooterCompanyList";
import { Link } from "react-router-dom";
export default function FooterCompanyBox() {

    return (

        <>
            <div className="footer_company_box">
                <div className="footer_company_left_box">
                    <FooterCompanyList />
                    <address className="footer_company_address_box">
                        <p className="footer_company_address--p">
                            <span>대표이사 : 안병현,김상훈</span>
                            <span>서울특별시 종로구 종로1 </span>
                            <span>사업자등록번호 : 102-81-11670</span>
                        </p>
                        <p className="footer_company_address--p">
                            <span>대표전화 : 1544-1900(발신자 부담전화)</span>
                            <span>FAX : 0502-987-5711(지역번호 공통)</span>
                            <span>서울특별시 통신판매업신고번호 : 제 653호</span>
                            <button>사업자정보확인</button>
                        </p>
                    </address>
                    <div className="footer_company_copyright">
                        <span className="copyright">
                            © KYOBO BOOK CENTRE
                        </span>
                    </div>
                </div>
                <div className="footer_company_right_box">
                    <div className="footer_company_service_box">
                        <span className="footer_company_tosspay">토스페이먼츠 구매안전서비스</span>
                        <button className="footer_company_check_btn">서비스 가입 확인</button>
                        <p className="footer_company_tosspay_info">고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한
                            토스페이먼츠의 구매안전서비스를 이용하실 수 있습니다.
                        </p>
                    </div>
                    <div className="footer_company_mark_box">
                        <Link to="#" className="footer_company_mark_img">
                            <img src="	https://contents.kyobobook.co.kr/resources/fo/images/common/ink/img_mark_isms@2x.png" alt="정보보호관리체계" />
                        </Link>
                        <span className="footer_company_isms_text">정보보호관리체계 <br></br>ISMS 인증획득</span>
                        <span className="footer_company_mark_text">[인증범위]온라인 교보문고 서비스 운영<br></br>[유효기간]2020.11.04 ~ 2023.11.03</span>
                    </div>
                </div>
            </div>
        </>

    )

};