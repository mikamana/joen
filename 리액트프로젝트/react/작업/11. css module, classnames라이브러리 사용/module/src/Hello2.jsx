import React from "react";
import styles from "./css/hello.module.css";
import classNames from 'classnames/bind';


export default function Hello2() {

    const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아오도록 설정함

    return (

        <>
            <div className={cx("box")}>라마바</div>
        </>

    );

}