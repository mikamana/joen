import React, { useEffect, useState } from 'react';

export default function useAxios(url) {

  const [list,setList] = useState()

  useEffect(()=>{

    axios({

      method:"get",
      url:url

    }).then((result)=>{

      setList(result.data)
      // 템플릿 만들어놓고
      // useAxios 호출하여 사용
    }).catch()

  },[])

  return [list]

}

