import React, { Children } from "react";
import "../css/olivecss/Main.css";

export default function Content({ children }) {

  return (

    <>
      <main>
        <section className="contents_wrap">
          <div className="inner">
            {children}
          </div>
        </section>
      </main>
    </>

  );

};