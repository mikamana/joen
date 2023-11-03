import React from "react";


export default function Menu(){

  const list = ['종합','실시간','일별','월별/주별','특가','스테디셀러'];

  const menuHandler = (event)=> {

    // alert("menu")
    // list.map((menu)=>{alert(menu);});
    // 핸들러를 호출할 때 
    
  }

  return(

    <>
      {list.map((menu)=>
          
        <div className="menu" onClick={menuHandler}>{menu}</div>
        
      )}
    </>

  )

}
