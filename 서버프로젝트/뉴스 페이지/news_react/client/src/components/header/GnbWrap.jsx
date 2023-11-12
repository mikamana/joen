import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function GnbWrap() {

    return (

        <>
            <div className="gnb_wrap inner">
                <ul>
                    <li>
                        <Link to="/">
                            동아일보
                        </Link>
                    </li>
                    <li >
                        <Link to="/jos">
                            조선일보
                        </Link>
                    </li>
                    <li>
                        <Link to="/asa">
                            아시아경제
                        </Link>
                    </li>
                    <li>
                        <Link to="/gyg">
                            경인일보
                        </Link>
                    </li>
                    <li>
                        <Link to="/sel">
                            서울경제
                        </Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>

    );

}