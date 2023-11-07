import React from "react";
import BookAvata from "./BookAvata";
import BookContent from "./BookContent";
import BookBuy from "./BookBuy";
import BookList from "./BookList";
import {useState, useEffect} from "react";

export default function Book(){
const [bookList, setBookList] = useState([]);
useEffect(()=>{
  fetch(`data/best_book.json`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    setBookList(data);
  });
}, []);

  return(
    <BookList>
      {bookList.map((book)=>
        <div className="book">
          <BookAvata image={book.image}/>
          <BookContent 
              top_tag={book.top_tag}
              kind={book.kind}
              title={book.title}
              comment={book.comment}
              author = {book.author}
              company = {book.company}
              pdate = {book.pdate}
              price = {book.price}
              point = {book.point}
              sale_index = {book.sale_index}
              review = {book.review}
              de_date = {book.de_date}
              goods = {book.goods}
          />
          <BookBuy />
        </div>
      )}      
    </BookList>
  );
}