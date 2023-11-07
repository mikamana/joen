import React from "react";


export default function BookCheckCount(){


  return(

    <>
      <input type="checkbox" />
      <span className="book_content__count--bg">-</span>
      <span className="book_content__count--text">0</span>
      <span className="book_content__count--bg">+</span>
    </>


  );

}