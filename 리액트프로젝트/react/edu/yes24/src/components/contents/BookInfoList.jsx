import React, { useEffect, useState } from "react";
import BookSubTitle from "./BookSubTitle";
import BookWriter from "./BookWriter";
import BookTitle from "./BookTitle";
import BookPrice from "./BookPrice";
import BookPoint from "./BookPoint";
import BookEvent from "./BookEvent";


export default function BookInfoList(props){

  const [book,setBook] = useState([])

  useEffect(()=>{

    fetch("/data/best_book.json")
    .then((response)=>response.json())
    .then((data)=>{
      setBook(data)
    })

  },[])


  return(

    <>
      
        <ul className="book_content--list-ul">
          <li key={props.id}className="book_content--list-li">
            <BookTitle title={props.title}/>
          </li>    
          <li key={props.id} className="book_content--list-li">
            <BookSubTitle subtitle={props.subTitle}/>
          </li>        
          <li key={props.id} className="book_content--list-li">
              <BookWriter 
                  writer={props.writer}
                  publish={props.publish}
                  date={props.date} 
              />
          </li>    
          <li key={props.id} className="book_content--list-li">
            <BookPrice price={props.price}/>
          </li>    
          <li key={props.id} className="book_content--list-li">
            <BookPoint point={props.point}/>
          </li>    
          <li key={props.id} className="book_content--list-li">
            <BookEvent event={props.event}/>
          </li>        
        </ul>
      
    </>

  )


}