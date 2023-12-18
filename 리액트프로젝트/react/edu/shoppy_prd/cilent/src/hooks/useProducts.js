import axios from "axios";
import { useEffect, useState } from "react";

export default function useProduct(url){

  const [productList, setProductList] = useState([]);

  

  useEffect(() => {
    axios
      .get(url)
      .then((result) => setProductList(result.data))
      .catch((err) => console.log(err));
  }, []);

  return [productList]

}


