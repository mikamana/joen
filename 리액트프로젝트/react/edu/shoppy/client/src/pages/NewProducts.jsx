import React, { useRef } from "react";
import { useState } from "react";
import axios from 'axios';
import { getUser } from "../util/localStorage";

export default function NewProducts() {
  const [form, setForm] = useState({ image: '', name: '', price: '', deliprice: '', info: '' });
  const userInfo = getUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const imgRef = useRef(null);
  const priRef = useRef(null);
  const namRef = useRef(null);
  const infRef = useRef(null);
  const delipriRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    if (form.image === "") {
      alert("이미지 내용을 입력해주세요")
      return imgRef.current.focus()


    }
    if (form.name === "") {
      alert("이름을 입력해주세요")
      return namRef.current.focus()

    }
    if (form.price === "") {
      alert("가격을 입력해주세요")
      return priRef.current.focus()

    }
    if (form.deliprice === "") {
      alert("배송비를 입력해주세요")
      return delipriRef.current.focus()

    }
    if (form.info === "") {
      alert("내용을 입력해주세요")
      return infRef.current.focus()

    }

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/products/new/',
      data: form,
    })
      .then((result) => {
        alert("상품이 등록되었습니다.")
        console.log('요청성공');
        console.log(result);
      })
      .catch((error) => {
        console.log('요청실패');
        console.log(error);
      });

    setForm({ image: '', name: '', price: '', deliprice: '', info: '' })

  }




  return (
    <div className="content">
      {userInfo ?
        <>
          <p className="font_title">
            New Products
          </p>
          <form className="new_product" onSubmit={handleSubmit}>
            <ul>
              <li>
                <input type="text" name="image" ref={imgRef} placeholder="image"
                  onChange={handleChange} value={form.image} />
              </li>
              <li>
                <input type="text" name="name" ref={namRef} placeholder="name"
                  onChange={handleChange} value={form.name} />
              </li>
              <li>
                <input type="text" name="price" ref={priRef} placeholder="price"
                  onChange={handleChange} value={form.price} />
              </li>
              <li>
                <input type="text" name="deliprice" ref={delipriRef} placeholder="deliprice"
                  onChange={handleChange} value={form.deliprice} />
              </li>
              <li>
                <input type="text" name="info" ref={infRef} placeholder="info"
                  onChange={handleChange} value={form.info} />
              </li>
            </ul>
            <button type="submit" className="new_product_button">제품 등록하기</button>
          </form>
        </>

        :

        <>
          <div>잘못된 경로로 접속하셨습니다.</div>
        </>





      }


    </div>
  );
}