import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";
export default function Navbar(){

  // const [data,setDataList] = useState("")


  // const { changePath } = useContext(PathContext);

  const handlerEvent = () => {

    changeName('/realtime');

  };

  return(

    <>
      <nav>
        <Link className="nav_link" to="/">종합</Link>
        <Link className="nav_link" to="/realtime" onClick={()=>{

          handlerEvent()
          

        }}>실시간</Link>
        <Link className="nav_link" to="/day">일별</Link>
        <Link className="nav_link" to="/monthweek">월별/주별</Link>
        <Link className="nav_link" to="/hotprice">특가</Link>
        <Link className="nav_link" to="/steady">스테디셀러</Link>
      </nav>
    </>

  )

}