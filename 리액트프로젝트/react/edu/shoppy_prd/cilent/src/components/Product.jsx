import React from "react";
import ProductAvata from "./ProductAvata";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Product({ filename }) {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/products/')
      .then((result) => setProductList(result.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <ProductList>
      {productList.map((product) =>
        <div key={product.pid}>
          <Link to={`/products/${product.pid}`}>
            <ProductAvata image={`http://127.0.0.1:8000/${product.image}`} />
          </Link>
        </div>
      )}
    </ProductList>
  );
}