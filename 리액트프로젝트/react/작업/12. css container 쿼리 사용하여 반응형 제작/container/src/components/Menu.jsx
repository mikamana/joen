import React from "react";
import styles from "../css/header/header.module.css";
import classNames from 'classnames/bind';


// 각 컴포넌트 별로 css파일을 별도로 두어 사용하는게 효율적

export default function Menu() {

    const cx = classNames.bind(styles)

    return (

        <>
            <nav className={cx("gnb")}>
                <ul className={cx("list")}>

                </ul>
            </nav>
        </>

    );

}

