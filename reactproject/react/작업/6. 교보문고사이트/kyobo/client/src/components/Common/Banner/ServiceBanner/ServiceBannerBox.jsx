import React from "react";
import "../../../../css/Common/banner/banner.css";
import ServiceBannerBoxMore from "./ServiceBannerBoxMore";
import ServiceBannerLoginMenu from "./ServiceLoginMenu";

export default function ServiceBanner() {

    return (
        <>
            <div className="service_banner--div inner">
                <ServiceBannerBoxMore />
                <ServiceBannerLoginMenu />
            </div>
        </>
    )

};