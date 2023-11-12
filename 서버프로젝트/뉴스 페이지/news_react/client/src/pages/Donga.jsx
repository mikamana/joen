import React, { useEffect, useState } from "react";
import FormSubmit from "./components/FormSubmit";
import CreateNewsToggle from "./components/CreateNewsToggle";
import Contents from "./components/Contents";
export default function Donga() {



    const [toggleNews, setToggleNews] = useState(false);
    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000")
            .then((response) => response.json())
            .then((data) => {

                setNewsList(data)

            })
            .catch(console.log("error"))

    }, [])

    // onClick 블레이스{} 안에 콜백함수 ()=>{}를 넣지않고
    // 실행했더니 무한루프 오류가 발생했다.
    // Callback함수를 사용하여 함수를 메모이제이션하여 해결
    // onClick하면 해당 조건이 실행되도록 만들었는데,
    // 콜백함수가 없다면 한번 클릭시 무한루프로 계속 실행이
    // 되는 상황으로 리액트에서 무한루프 오류로 인식한다. 
    // 콜백함수는 매개변수를 통해 다른 함수의 내부로 접근하는 것
    // 다른 함수로 값을 전달할 수 있다.
    // 콜백함수는 함수의 파라미터로써 전달되며, 테스크가 끝난 직후
    // 호출하여 사용하면 함수의 기능이 끝나면 그 다음 함수가
    // 콜백되도록 하여 다양한 방법을 사용할 수 있다.
    // 리액트에서는 자바스크립트 표현식을 JSX 내부에서 사용할 수 있도록 하기 위해서 {}를 감싸 사용
    // ()=>{} 콜백함수를 사용하여 onClick를 하면 함수를 호출 하도록 한다.
    // ()=>{} 콜백함수를 호출하지않고 사용하면
    // 자바스크립트 표현식으로 인해 무한 루프가 발생한다.

    const toggleUpdate = () => {

        if (toggleNews === true) {

            setToggleNews(false)

        } else {

            setToggleNews(true)

        }

    }

    console.log(newsList);

    return (
        <>
            <section className="contents_wrap inner">
                <CreateNewsToggle onClick={toggleUpdate} />
                {toggleNews === true ? <FormSubmit /> : null}
                {newsList.map((news) =>

                    <Contents
                        nid={news.nid}
                        title={news.title}
                        contents={news.contents}
                        url={news.url}
                    />
                )}
            </section >
        </>
    )


}