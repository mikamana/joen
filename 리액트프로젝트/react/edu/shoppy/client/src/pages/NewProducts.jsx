import React from "react";
import { useState } from "react";
import axios from 'axios';
import { getUser } from "../util/localStorage";

export default function NewProducts() {
  const [form, setForm] = useState({ image: '', name: '', price: '', info: '' });
  const userInfo = getUser();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    //post --> axios
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/products/new/',
      data: form,
    })
      .then((result) => {
        console.log('요청성공');
        console.log(result);
      })
      .catch((error) => {
        console.log('요청실패');
        console.log(error);
      });

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
                <input type="text" name="image" placeholder="image"
                  onChange={handleChange} value={form.image} />
              </li>
              <li>
                <input type="text" name="name" placeholder="name"
                  onChange={handleChange} value={form.name} />
              </li>
              <li>
                <input type="text" name="price" placeholder="price"
                  onChange={handleChange} value={form.price} />
              </li>
              <li>
                <input type="text" name="info" placeholder="info"
                  onChange={handleChange} value={form.info} />
              </li>
            </ul>
            <button className="new_product_button">제품 등록하기</button>
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