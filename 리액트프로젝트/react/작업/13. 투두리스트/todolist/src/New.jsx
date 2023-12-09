import React from 'react';
import LiWrap from './components/LiWrap';
import styles from "./new.module.css";

export default function New() {

    return (
        <>
            <ul className={styles.new_list}>
                <LiWrap list={["dd", "bb", "cc"]} />
            </ul>
        </>
    );
}

