import React from "react";
import styles from "../css/header/banner/banner.module.css";
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

export default function BannerNav() {


    return (

        <>
            <nav className={cx("nav")}>
                <BannerList />
            </nav>
        </>

    );

}

function BannerList() {

    return (

        <>
            <ul className={cx("list")}>
                <li className={cx("list_li")}>
                    가나
                </li>
                <li className={cx("list_li")}>
                    가나
                </li>
                <li className={cx("list_li")}>
                    가나
                </li>
            </ul>
        </>

    );

}