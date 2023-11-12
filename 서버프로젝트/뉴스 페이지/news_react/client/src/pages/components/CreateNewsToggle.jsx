import React, { useState } from "react";


export default function CreateNewsToggle(props) {

    // useState 훅 뒤에는 무조건 세미콜론 ;이 있어야함 => 무한루프발생

    const [toggleNews, setToggleNews] = useState(false);


    return (

        <>
            <div className="create_news_btn">
                <button type="button" onClick={() => {
                    toggleNews === true ? setToggleNews(false) : setToggleNews(true)
                    props.onClick()
                }}>뉴스등록</button>
            </div>
        </>

    )


}