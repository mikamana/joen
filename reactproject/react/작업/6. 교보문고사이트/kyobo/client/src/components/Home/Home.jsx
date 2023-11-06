import React from "react";
import "../../css/reset.css";
import "../../css/Common/Mixin/common.css";
import Header from "../Common/Header/Header";
import Aside from "../Common/Aside/Aside";
import Footer from "../Common/Footer/Footer";
import TopBanner from "../Common/Banner/TopBanner/TopBanner";
import ServiceBanner from "../Common/Banner/ServiceBanner/ServiceBanner"
import SearchWrap from "../Common/Header/Search/SearchWrap";
import GnbWrap from "../Common/Header/Gnb/GnbWrap";
export default function Home() {

    return (

        <>

            <Header>
                <TopBanner />
                <ServiceBanner />
                <SearchWrap />
                <GnbWrap />
            </Header>
            <Aside />
            <Footer />
        </>

    );

}

