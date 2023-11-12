import React, { useEffect, useState } from "react";




export default function FormSubmit() {

    let [val, setVal] = useState({ title: "", contents: "", url: "" })

    // let [info, setInfo] = useState({title})
    function handlerSubmit(e) {

        e.preventDefault()

        console.log(val);

    }

    function handlerChange(e) {

        const { name, value } = e.target

        setVal({ ...val, [name]: value })

        console.log("title = " + val.title);
        console.log("contents = " + val.contents);
        console.log("url = " + val.url);

    }

    const createForm = (e) => {

        // window.location.reload()

        // useEffect(() => {
        //useEffect사용이 안되는 이유를 모르겠음

        fetch("http://127.0.0.1:8000", {

            method: 'POST',
            headers: {
                // 필요에 따라 다른 헤더들을 추가할 수 있습니다.
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: val.title, contents: val.contents, url: val.url }), // 데이터를 JSON 문자열로 변환

        }).then((result) => {
            console.log(result);
            if (result === 204) {
                window.location.reload()
            }

        })

        // }, [])


    }




    return (

        <>
            <form className="login_form" onSubmit={handlerSubmit}>
                <input type="text"
                    value={val.title}
                    name="title"
                    onChange={handlerChange}
                    placeholder="제목을 입력하세요"
                />
                <input type="text"
                    value={val.contents}
                    name="contents"
                    onChange={handlerChange}
                    placeholder="내용을 입력하세요"
                />
                <input type="text"
                    value={val.url}
                    name="url"
                    onChange={handlerChange}
                    placeholder="이미지url을 입력하세요"
                />
                <select name="publisher" id="publisher">
                    <option value="동아일보">동아일보</option>
                    <option value="조선일보">조선일보</option>
                    <option value="아시아경제">아시아경제</option>
                    <option value="경인일보">경인일보</option>
                    <option value="서울경제">서울경제</option>
                </select>
                <button onClick={() => {
                    createForm()
                }}>버튼</button>
            </form>
        </>

    )

}