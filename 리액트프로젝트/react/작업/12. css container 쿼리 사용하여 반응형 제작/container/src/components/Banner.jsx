import React, { useState } from "react";
import styles from "../css/header/banner/banner.module.css";
import classNames from 'classnames/bind';
import BannerNav from "./BannerNav";


const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [{
        path: '/',
        element: <></>
    }]
}])
export default function Banner() {
    const cx = classNames.bind(styles)
    return (

        <>
            <div className={cx("banner", "inner")}>
                <BannerNav />
            </div>
        </>
    );
}



