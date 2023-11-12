import React, { Children } from "react";
import "../../../css/main/main.css";


export default function Contents({ children }) {

    return (

        <>
            <main className="main_contents">
                {children}
            </main>
        </>

    );

};