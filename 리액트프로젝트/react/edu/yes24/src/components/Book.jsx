import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookContents from "./contents/BookContents";
import BookCount from "./contents/BookCount"
import BookImage from "./contents/BookImage";
import BookButtonBox from "./contents/BookButtonBox";
import BookInfoList from "./contents/BookInfoList";

export default function Book() {

  const [book, setBook] = useState([])

  let bk = useSelector((state) => { return state.user })

  console.log(bk);

  useEffect(() => {

    fetch(`/data/${bk}.json`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data)
      })

  }, [])

  // book.json의 데이터 개수만큼 반복
  // booksubtitle부터 bookevent를 묶어서 ul li로 만들어주어야함
  // 전체 콘텐츠를 반복해야하고 , 내용은 따로 관리해야함
  // 
  return (
    <>

      <BookContents>
        {book.map((list) =>
          <>
            <BookCount count={list.count} />
            <BookImage image={list.imgUrl} />
            <BookInfoList
              id={list.id}
              title={list.title}
              subtitle={list.subtitle}
              writer={list.writer}
              publish={list.publish}
              date={list.date}
              price={list.price}
              point={list.point}
              event={list.event}
            />
            <BookButtonBox />
          </>
        )}
      </BookContents>


    </>
  )

}