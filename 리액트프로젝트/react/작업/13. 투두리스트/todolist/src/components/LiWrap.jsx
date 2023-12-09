import React from 'react';
import { useEffect, useState } from "react";
import styles from "../new.module.css";

export default function LiWrap(props) {

    const [active, setActive] = useState(0);
    const [navList, setNavList] = useState(props.list);

    return (
        <>
            {navList.map((val, idx) =>
                <li className={active === idx ? styles.active : null} onClick={() => { setActive(idx) }}>{val}</li>
            )}
        </>
    );
}

