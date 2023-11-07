import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Video(props){

  const navigate = useNavigate();

  const [text,setText] = useState("");

  const handleChange = (e) =>{

    setText(e.target.value)

  }

  const handleSubmit = (e) =>{

    e.preventDefault()

    setText('');
    // text파라미터를 /video/text파라미터전송
    navigate(`/video/${text}`);
    // 이동하려는 주소
    // redirect와 비슷한 역할
  }

  return(

    <>
      <div>Video !</div>
      <form onSubmit={handleSubmit}>
        <input 
              type="text"
              name="videoId"
              placeholder="video ID : "
              value={text}
              onChange={handleChange} 
        />
      </form>
    </>

  )

}