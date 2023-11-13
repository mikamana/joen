import React from "react";
import BookTopTag from "./BookTopTag";
import BookTitle from "./BookTitle";
import BookWriter from "./BookWriter";
import BookPrice from "./BookPrice";
import BookDeDate from "./BookDeDate";
import BookGoods from "./BookGoods";
import BookReview from "./BookReview";

export default function BookInfoList(props) {

  return (

    <>

      <ul className="book_content--list-ul">
        <li key={props.bid} className="book_content--list-li">
          <BookTopTag
            topTag={props.topTag} />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookTitle
            title={props.title}
            kind={props.kind}
          />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookWriter
            writer={props.writer}
            publish={props.publish}
            pDate={props.pDate}
          />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookPrice price={props.price}
            totalPrice={props.totalPrice}
            point={props.point}
          />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookReview
            saleIndex={props.saleIndex}
            review={props.review}
          />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookDeDate
            deDate={props.deDate}
          />
        </li>
        <li key={props.bid} className="book_content--list-li">
          <BookGoods
            goods={props.goods} />
        </li>
      </ul>

    </>

  )


}