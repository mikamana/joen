import React, { useEffect } from "react";



export default function ButtonBox(props) {



    return (

        <>
            <button>삭제</button>
            <button onClick={() => {

                props.onClick()

            }}>편집</button>
        </>

    )


}