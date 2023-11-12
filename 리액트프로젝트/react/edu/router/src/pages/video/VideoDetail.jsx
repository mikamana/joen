/* 싱글페이지에 들어가는 컴포넌트 */

import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail(){

  const {videoId} = useParams();
  // useParams 메서드는 넘어오는 데이터를 확인할 수 있다.
  // {params} = json으로 받아서 확인
  // app.js의 path 값인 :videoId 값을 받아야함
  
  
  console.log(videoId);

  return(

    <>
      <div>
        Video ID : {videoId}
      </div>
    </>

  )
  }