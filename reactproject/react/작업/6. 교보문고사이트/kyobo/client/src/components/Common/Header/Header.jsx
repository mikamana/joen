import React, { Children } from "react";
import "../../../css/Common/Header/header.css";

export default function Header({ children }) {

    return (

        <>
            <header className="header_wrap">
                {children}
            </header>
        </>

    )

};