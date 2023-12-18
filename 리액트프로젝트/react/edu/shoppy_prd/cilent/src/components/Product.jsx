import React from "react";
import ProductAvata from "./ProductAvata";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import useProduct from "../hooks/useProducts";

export default function Product({ filename }) {

  const baseUrl = 'http://127.0.0.1:8000/products/'
  const [productList] = useProduct(baseUrl);



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