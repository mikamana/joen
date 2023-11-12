import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function ReviewBox() {


    let [review, setReview] = useState("")
    let [reviewList, setReviewList] = useState([])

    const handlerSumbit = (e) => {

        e.preventDefault()

        console.log(review);

    }

    const handlerReview = (e) => {

        const { name, value } = e.target

        setReview(value)

        console.log(review.content);

    }

    let params = useParams()

    const createReview = () => {

        fetch(`http://127.0.0.1:8000/${params.id}`, {

            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: review, nid: params.id })

        }).then((result) => {

            window.location.reload()

        }).catch(console.log("error"))


    }

    console.log(params);

    useEffect(() => {

        fetch(`http://127.0.0.1:8000/${params.id}`)
            .then((response) => response.json())
            .then((data) => {

                setReviewList(data)

            }).catch(console.log("error"))
    }, [])



    return (

        <>
            <div className="create_review_wrap inner">
                <h3>리뷰등록</h3>
                <form onSubmit={handlerSumbit}>
                    <input type="text"
                        value={review.content}
                        name="review"
                        onChange={handlerReview}
                    />
                    <button onClick={createReview}>리뷰등록</button>
                </form>
            </div>
            <div className="review_list inner">
                <ul>
                    {reviewList.map((review) =>

                        <li>
                            <h4>{review.RID}</h4>
                            <p>{review.CONTENT}</p>
                            <p>{review.redate}</p>
                        </li>

                    )}

                </ul>
            </div>
        </>

    );

}