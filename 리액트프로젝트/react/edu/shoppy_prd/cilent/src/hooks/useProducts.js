import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "./useAxios";

export default function useProduct(url){

  const [productList, setProductList] = useState([]);
  
  const [list] = useAxios(url)

  

  // useEffect(() => {
  //   axios
  //     .get(url)
  //     .then((result) => setProductList(result.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return [productList]

}


