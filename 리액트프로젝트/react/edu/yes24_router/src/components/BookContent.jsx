import React from "react";

export default function BookContent(book) {
  return (
    <div className="bookcontent">
      <p>{book.top_tag}</p>
      <p>[{book.kind}] {book.title} {book.comment} [ 초판한정 저자 인쇄 사인본 + 핸디북 증정은 종료되었습니다. ]</p>
      <p>{book.author} 저 {book.company} {book.pdate}</p>
      <p>{book.price}원 포인트적립{book.point}원</p>
      <p>판매지수 {book.sale_index} 회원리뷰({book.review}건) 리뷰 총점10.0 정보 더 보기/감추기</p>
      <p>{book.de_date} 도착예정 출고예상일과 상품수령 안내</p>
      <p><span>{book.goods}</span></p>
    </div>
  );
}