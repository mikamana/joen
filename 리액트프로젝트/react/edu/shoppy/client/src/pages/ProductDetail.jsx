import React, { useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../util/localStorage";
import BookCheckBox from "./components/BookCheckBox";
import { getCookie, removeCookie, setCookie } from "../util/cookie";
// import ProductAvata from "../components/ProductAvata";
export default function ProductDetail() {
  const location = useLocation();
  const { pid } = useParams();
  const userInfo = getUser();
  const [product, setProduct] = useState({});
  const selectSize = useRef(null);
  const navigate = useNavigate()
  // const [lth, setLth] = useState(1)
  //하위(자식) 컴포넌트인 Quantity의 number 값 가져오기
  const [qty, setQty] = useState(1);

  useEffect(() => {

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

  const getQty = (e) => { // Quantity

    setQty(e.qty)
    // 컴포넌트의 속성값에 함수를 넣으면 자신의 이벤트로 리턴받아서 사용하겠다는 의미이다.
    // 컴포넌트의 속성에 값을 넣으면 prop로 넘겨주겠다는 의미이다.
  }

  const handleClick = () => {

    if (userInfo) {

      if (product.size !== undefined) {

        // alert(JSON.stringify(product.pid, product.size, userInfo.)) //pid,size,id
        const cartProduct = { id: userInfo.id, pid: product.pid, size: product.size, qty: qty };
        axios({
          // axios ==> http://127.0.0.1:8000/carts/new :: POST
          method: "POST",
          url: "http://127.0.0.1:8000/carts/new/",
          data: cartProduct

        }).then((result) => {

          if (result.data === "ok") {

            const choice = window.confirm("장바구니에 추가 되었습니다.장바구니로 이동하시겠습니까?")
            alert(choice)
            if (choice) navigate(`/carts/${userInfo.id}`);

            removeCookie("sproduct")

          }

        })

      } else {

        alert("옵션을 선택해주세요")
        return selectSize.current.focus();

      }

    } else {

      alert("로그인해주세요")

      setCookie("sproduct", JSON.stringify(location.pathname));
      // 쿠키를 사용해서 잠깐 동안 데이터를 저장시켜놓고 사용한다.
      // 현재 주소는 useLoaction을 추가한 후에 loaction.pathname을 이용하면 된다.
      const cok = getCookie("sproduct")

      console.log(cok);

      return navigate("/login")

    }

  }

  // const rangeChange = (e) => {

  //   setLth(e.target.value)

  //   console.log(lth);

  // }



  return (
    <div className="content">
      <div className="product_detail">
        <img src={`/images/${product.image}`} className="detail_image" />
        <ul className="product_info">
          <li className="detail_font_bigger">{product.name}</li>
          <li className="detail_font_bigger">{product.price}</li>
          <li className="detail_font_small">{product.info}</li>
          <li>
            <BookCheckBox getQty={getQty} />
          </li>
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
          {/* <li>수량 선택 : <input type="number" min="1" max="20" value={lth} onChange={rangeChange} /></li> */}
          {/* <li>수량 선택 : <input type="range" min="1" max="20" value={lth} name="range" onChange={rangeChange} />{lth}</li> range로 개수 추가하는거 onchange로 해봐야함 */}
          <li><button type="button" className="detail_button" onClick={handleClick}>장바구니 추가</button></li>
        </ul>
      </div>
    </div>
  );
}