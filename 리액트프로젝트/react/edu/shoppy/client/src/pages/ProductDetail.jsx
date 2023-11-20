import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../util/localStorage";
// import ProductAvata from "../components/ProductAvata";
export default function ProductDetail() {
  const { pid } = useParams();
  const userInfo = getUser();
  const [product, setProduct] = useState({});
  const selectSize = useRef(null);
  const navigate = useNavigate()
  const [lth, setLth] = useState(1)

  useEffect(() => {
    // console.log(lthRef.current.valueOf);

    axios(`http://127.0.0.1:8000/products/${pid}`)

      .then((result) => {

        setProduct(result.data[0]);

      })

      .catch((console.log("err")))

  }, [])

  const handleSelectChange = (e) => {

    const { name, value } = e.target

    setProduct({ ...product, [name]: value })

  }



  const handleClick = () => {

    if (userInfo) {

      if (product.size !== undefined) {

        // alert(JSON.stringify(product.pid, product.size, userInfo.)) //pid,size,id
        const cartProduct = { id: userInfo.id, pid: product.pid, size: product.size, qty: lth };
        alert("장바구니에 추가 되었습니다.")
        alert(lth)
        axios({
          // axios ==> http://127.0.0.1:8000/carts/new :: POST
          method: "POST",
          url: "http://127.0.0.1:8000/carts/new/",
          data: cartProduct

        })

      } else {

        alert("옵션을 선택해주세요")
        return selectSize.current.focus();

      }

    } else {

      alert("로그인해주세요")
      return navigate("/login")

    }

  }

  const rangeChange = (e) => {

    setLth(e.target.value)

    console.log(lth);

  }

  return (
    <div className="content">
      <div className="product_detail">
        <img src={`/images/${product.image}`} className="detail_image" />
        <ul className="product_info">
          <li className="detail_font_bigger">{product.name}</li>
          <li className="detail_font_bigger">{product.price}</li>
          <li className="detail_font_small">{product.info}</li>
          <li>
            <span className="detail_font_small">옵션 : </span>
            <select className="detail_select" ref={selectSize} name="size" onChange={handleSelectChange}>
              <option value="default">선택해주세요</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </li>
          <li>수량 선택 : <input type="number" min="1" max="20" value={lth} onChange={rangeChange} /></li>
          {/* <li>수량 선택 : <input type="range" min="1" max="20" value={lth} name="range" onChange={rangeChange} />{lth}</li> range로 개수 추가하는거 onchange로 해봐야함 */}
          <li><button type="button" className="detail_button" onClick={handleClick}>장바구니 추가</button></li>
        </ul>
      </div>
    </div>
  );
}