import React from "react";
import { useState } from "react";
import axios from 'axios';
import { getUser } from '../util/localStorage';
import NotFound from '../pages/NotFound';
import ImageUpload from "../components/ImageUpload";

export default function NewProducts(){
  const userInfo = getUser();
  const [form, setForm] = useState({image:'',name:'',price:'',info:''});
  const [image, setImage] = useState(null);

   //ImageUpload 선택 이미지 경로 가져오기
   const getImage = (e) => {
    alert(`new file ==>> ${JSON.stringify(e)}`); 
    setImage(e);
  }

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]:value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    // console.log('FormData as object:', formDataObject);

    //post --> axios
    axios({
      method:'post',
      url:'http://127.0.0.1:8000/products/new/',
      data: formDataObject,
    })
    .then((result)=>{
      if(result.data === 'ok'){
        alert('새로운 제품이 등록되었습니다.');
      }
    })
    .catch((error)=>{
      console.log('요청실패');
      console.log(error);  
    });
  }

  return(
    <>
    { userInfo ? (       
        <div className="content"> 
          <p className="font_title">
            New Products
          </p>
          <form className="new_product" onSubmit={handleSubmit}>
            <ul>         
              <li>
                <input type="text" name="image" placeholder="image"
                         value={image}/>                
                <ImageUpload getImage={getImage}/>
              </li>
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
            </ul>
            <button className ="new_product_button">제품 등록하기</button>
          </form>  
        </div>
    ) : (
      <NotFound />
    )    
    }
    </>
  );
}