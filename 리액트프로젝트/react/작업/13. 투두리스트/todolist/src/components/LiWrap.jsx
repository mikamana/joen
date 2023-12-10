import React from 'react';
import { useEffect, useState } from "react";
import styles from "../new.module.css";

export default function LiWrap(props) {

    const [active, setActive] = useState(0);
    const [navList, setNavList] = useState(props.list);

    useEffect(() => {

        if (active === 0) {

            props.getNav("All")

        } else if (active === 1) {

            props.getNav("Active")

        } else if (active === 2) {

            props.getNav("Completed")

        }

    }, [active]);

    //각 li에 인덱스가 하나씩 정해져있으므로 현재 클릭한 li의 idx값이 active에 들어가게됌

    



    return (
        <>
            {navList.map((val, idx) =>
                <li className={active === idx ? `${styles.li_list} ${styles.active} ` : styles.li_list} onClick={() => {
                    setActive(idx)
                }}>{val}</li>
            )}
        </>
    );

}

