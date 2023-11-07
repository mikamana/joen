import React, { Children } from "react";
import "../../../css/Common/Footer/footer.css";

export default function Footer({ children }) {

    return (

        <>
            <footer className="footer_wrap">
                <div className="footer_wrap--inner inner">
                    {children}
                </div>
            </footer>
        </>

    )

};