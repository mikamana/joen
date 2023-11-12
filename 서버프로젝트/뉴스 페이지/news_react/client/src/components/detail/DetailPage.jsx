import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewBox from "./ReviewBox";

export default function DetailPage() {

    const [newsList, setNewsList] = useState([])

    useEffect(() => {

        fetch("http://127.0.0.1:8000")
            .then((response) => response.json())
            .then((data) => {

                setNewsList(data)
                // console.log(data);
            })
            .catch(console.log("error"))

    }, [])

    // console.log(newsList);

    const params = useParams()

    const list = newsList.filter((news) => {

        if (news.nid === parseInt(params.id)) {

            return news

        }

    })

    // console.log(list);

    return (

        <>
            <section className="detail_wrap">
                <div className="detail_inner inner">
                    {list.map((news) =>
                        <>
                            <fieldset>
                                <img src={news.url} alt="이미지1" />
                            </fieldset>
                            <h2>
                                {news.title}
                            </h2>
                            <p>
                                {news.contents}
                            </p>
                        </>
                    )}
                </div>
                <ReviewBox />
            </section >
        </>

    )


}