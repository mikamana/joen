import React, { useEffect, useState } from "react";
import BookContents from "./contents/BookContents";
import BookImage from "./contents/BookImage";
import BookButtonBox from "./contents/BookButtonBox";
import BookInfoList from "./contents/BookInfoList";
import axios from "axios";

export default function Book(props) {

  const [book, setBook] = useState([])

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:8080/${props.params}`)
      .then((result) => { setBook(result.data) })
      .catch()

  }, [])

  // book.json의 데이터 개수만큼 반복
  // booksubtitle부터 bookevent를 묶어서 ul li로 만들어주어야함
  // 전체 콘텐츠를 반복해야하고 , 내용은 따로 관리해야함

  return (
    <>

      <BookContents>
        {book.map((list) =>
          <>
            <li className="book_list_li" key={list.bid}>
              <BookImage image={list.image} />
              <BookInfoList
                bid={list.bid}
                topTag={list.top_tag}
                kind={list.kind}
                title={list.title}
                writer={list.writer}
                publish={list.publish}
                pDate={list.pdate}
                price={list.price}
                totalPrice={list.total_price}
                point={list.point}
                saleIndex={list.sale_index}
                review={list.review}
                deDate={list.de_date}
                goods={list.goods}
                bsid={list.bs_id}
              />
              <BookButtonBox />
            </li>
          </>
        )}
      </BookContents>


    </>
  )

}