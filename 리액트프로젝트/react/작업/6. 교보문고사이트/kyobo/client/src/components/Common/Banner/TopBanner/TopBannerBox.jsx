import React from "react";
import "../../../../css/Common/banner/banner.css";
import TopBannerContents from "./TopBannerContents";

export default function TopBannerBox() {

    return (
        <>
            <div className="top_banner--div inner">
                <p className="top_banner--text-p">
                    <TopBannerContents
                        subtitle="러그/테이블/파우치"
                        title="읽는 사람의 카탈로그"
                    />
                </p>
            </div>
        </>
    )

};