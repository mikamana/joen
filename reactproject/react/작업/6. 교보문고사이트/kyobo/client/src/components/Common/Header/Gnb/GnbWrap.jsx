import React from "react";
import GnbMenuButton from "./GnbMenuButton";
import GnbMainMenu from "./GnbMainMenu";
import GnbSubMenu from "./GnbSubMenu";
export default function GnbWrap() {
    return (

        <>
            <section className="header__gnb_wrap--section">
                <div className="gnb_wrap--innerbox inner">
                    <GnbMenuButton />
                    <GnbMainMenu />
                    <GnbSubMenu />
                </div>
            </section>
        </>

    );

}