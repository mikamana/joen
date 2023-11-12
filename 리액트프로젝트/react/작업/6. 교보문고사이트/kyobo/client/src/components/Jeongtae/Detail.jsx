import React from "react";
import SubHeader from "../Common/SubHeader/SubHeader";
import Footer from "../Common/Footer/Footer";
import Aside from "../Common/Aside/Aside";
import DetailContents from "../../pages/Jeongtae/Detail/components/DetailContents";

export default function Detail() {

    return (

        <>
            <SubHeader />
            <DetailContents />
            <Aside />
            <Footer />
        </>

    );

}