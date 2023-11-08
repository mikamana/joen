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
import FooterLogoBox from "../Common/Footer/FooterLogoBox";
import FooterCompanyBox from "../Common/Footer/FooterCompanyBox";
import MainVisual from "../../pages/home/components/MainVisaul";
import Contents from "../../pages/home/components/Contents";
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
            <Contents>
                <MainVisual />
            </Contents>
            <Footer>
                <FooterLogoBox />
                <FooterCompanyBox />
            </Footer>
        </>

    );

}

