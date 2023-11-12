import React, { useEffect, useState } from "react";
import ButtonBox from "./ButtonBox";
import { Link } from "react-router-dom";


export default function Contents(props) {
    const [toggle, setToggle] = useState(false);
    const [input, setInput] = useState("");
    const [update, setUpdate] = useState("");



    const toggleHandler = () => {

        setToggle((toggle) => !toggle);
        // console.log("toggle =" + toggle);

    };

    const changeInput = (e) => {

        setInput(e.target.value)

    }

    const fnUpdate = (e) => {

        fetch("http://127.0.0.1:8000", {

            method: "put",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nid: props.nid, contents: input })

        }).then((response) => response.json())
            .then((data) => {

                setUpdate(data)

            })

    }

    return (

        <>
            <div className="news__list_wrap">
                <fieldset>
                    <img src="https://imgnews.pstatic.net/image/origin/001/2023/11/11/14323772.jpg?type=nf132_90" alt="썸네일1" />
                </fieldset>
                <ButtonBox onClick={toggleHandler}
                    nid={props.nid}
                />
                <div className="contents_info">
                    <h2><Link to={"/" + props.nid}>{props.title}</Link></h2>
                    <p>{props.contents}</p>
                </div>
                {toggle === true ?
                    <p className="contents_update_p">업데이트 할 내용 :
                        <input type="text" name="update" value={input} onChange={changeInput} />
                        <button onClick={fnUpdate}>업데이트</button>
                    </p> : null}
            </div>
        </>

    )
}