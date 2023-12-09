import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { getUser } from '../util/localStorage';
import NotFound from '../pages/NotFound';
import ImageUpload from "../components/ImageUpload";

export default function NewProducts() {
  const userInfo = getUser();
  const [image, setImage] = useState(null);
  // const [form, setForm] = useState({ image: '', name: '', price: '', info: '' });

  //ImageUpload 선택 이미지 경로 가져오기
  const getImage = (e, d) => {
    alert(`new file ==>> ${JSON.stringify(e)}`);
    setImage(e);
    // console.log(d);
    // ImageUpload파일에서 데이터 받아옴
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setForm({ ...form, [name]: value });
  // }


  /* useEffect(() => {

    const data = new FormData();

    // console.log(data);
    data.append("username", "aa")
    data.append("username", "bb")

    // console.log(data.values('bb'));
    // console.log(data.keys('username'));
    for (const value of data.values()) {
      console.log(value);
    }

    const ads = [{

      name: "dd",
      dal: "ss"

    }]

    ads.forEach((val, idx) => {

      console.log(val + idx);

    })
    // console.log(data.getAll("username"));// 배열로 반환해서 가져옴



  }, []) */

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // FormData는 name과 value를 가진 객체를 생성한다.
    // HTML Form요소가 지정된 경우에는 data의 현재 key/value들로 채워진다.
    // key/value는 submit한 각 요소의 name과value를 사용한다.
    // 지정되지 않은 경우에는 append와 같은 속성을 사용하여 key/value값을 지정해줄 수 있다.
    const formDataObject = {};

    // const array = new Array(0, 1)
    // let result = formData.append(name, value)

    /* 
      formData.append(name, value)
      - form의 name 과 value 를 필드에 추가
      - input의 name 속성과 value 입력값 역할을 한다고 생각 하면 된다.
   */

    formData.forEach((value, key) => {
      // FormData에서 사용하는 forEach는 FormData 클래스 안에 새롭게 내장되어있는 객체이다.
      // 기존의 전역에서 사용하는 forEach와 다름
      // console.log(key);
      formDataObject[key] = value;

    });

    console.log(formDataObject);

    //post --> axios
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/products/new/',
      data: formDataObject,
    })
      .then((result) => {
        if (result.data === 'ok') {
          alert('새로운 제품이 등록되었습니다.');
        }
      })
      .catch((error) => {
        console.log('요청실패');
        console.log(error);
      });
  }


  return (
    <>
      {userInfo ? (
        <div className="content">
          <p className="font_title">
            New Products
          </p>
          <form className="new_product" onSubmit={handleSubmit}>
            <ul>
              <li>
                <input type="text" name="name" placeholder="name"
                />
              </li>
              <li>
                <input type="text" name="price" placeholder="price"
                />
              </li>
              <li>
                <input type="text" name="info" placeholder="info"
                />
              </li>
              <li>
                <input type="hidden" name="image" placeholder="image"
                  value={image} />
                <ImageUpload getImage={getImage} />
              </li>
            </ul>
            <button className="new_product_button">제품 등록하기</button>
          </form>
        </div>
      ) : (
        <NotFound />
      )
      }
    </>
  );
}