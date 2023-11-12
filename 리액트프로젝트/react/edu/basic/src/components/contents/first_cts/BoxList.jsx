import React, { useEffect, useState } from "react";
import ContentInfo from "./ContentInfo";

export default function BoxList(props) {

  const [contentList, setContentList] = useState([]);

  useEffect(() => { // 최초에 한번만 fetch 실행
    //  React 컴포넌트가 렌더링되는 시점에서 비동기 호출을 직접 수행하면 문제가 발생
    fetch(`/data/olive_contents.json`) // 
      .then((response) => response.json())
      .then((data) => {
        setContentList(data);
      });
  }, []);
  // 비어있는 종속성 배열로 설정하여 최초 렌더링 시에만 호출되도록 변경
  // 컴포넌트가 처음 렌더링될 때 한 번만 실행되도록 함
  // 기본적으로 useEffect는 렌더링 결과가 화면에 반영된 후에 실행되지만,
  // 두 번째 매개변수로 전달된 종속성 배열을 기반으로 언제 실행할지를 결정합니다.
  return (

    <>
      <div className="div_wrap">
        <div className="text_wrap">
          <h2 className="content_title">{props.name}</h2>
          <span className="more_add">더보기</span>
        </div>
        <ul>
          {contentList.map((list, idx) =>

            <li key={idx}>
              <ContentInfo
                image={list.image}
                title={list.title}
                content={list.content}
                price={list.price}
                totalPrice={list.totalPrice}
              />
            </li>

          )}
        </ul>
      </div>
    </>

  )

}