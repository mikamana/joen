import React from "react";
import { Link } from "react-router-dom";



export default function FooterCompanyList() {

    return (

        <>
            <ul className="footer_company_list--ul">
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">회사소개</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">이용약관</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">개인정보처리방침</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">청소년보호정책</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">대량주문안내</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">협력사여러분</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">채용정보</Link>
                </li>
                <li className="footer_company_list--li">
                    <Link to="#" className="footer_company_list--a">광고소개</Link>
                </li>
            </ul>
        </>

    )

};