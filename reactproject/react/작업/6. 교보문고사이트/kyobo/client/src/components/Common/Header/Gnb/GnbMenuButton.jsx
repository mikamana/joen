import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function GnbMenuButton() {

    return (
        <>
            <button className="gnb_wrap__button--menu">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </>
    )

};