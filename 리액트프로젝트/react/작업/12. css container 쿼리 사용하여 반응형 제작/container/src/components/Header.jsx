import React, { useState } from "react";
import styles from "../css/header/header.module.css";
import classNames from 'classnames/bind';
import Banner from "./Banner";
import Menu from "./Menu";

export default function Header() {

    const cx = classNames.bind(styles)
    const [,] = useState('')
    
    return (

        <>
            <header className={cx("wrap")}>
                <Banner />
                <Menu />
            </header>
        </>

    );

}


