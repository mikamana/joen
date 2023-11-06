import React from "react";
import "../../../../css/Common/banner/banner.css";
import ServiceLoginMenuList from "./ServiceLoginMenuList"
export default function ServiceBannerLoginMenu() {


    return (
        <>
            <nav className="service_banner--loginmenu--nav">
                <ul className="service_banner--loginlist--ul">
                    <ServiceLoginMenuList />
                </ul>
            </nav>
        </>
    )

};