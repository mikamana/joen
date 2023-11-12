import React, { useState } from "react";
import Update from "./Update";
import ContentsInfo from "./ContentsInfo";

export default function Contents(props) {

  const [toggle, setToggle] = useState(false)

  const toggleHandler = () => {

    setToggle((toggle) => !toggle);
    // console.log("toggle =" + toggle);

  };

  return (
    <>
      <div className="content_wrap">
        <ContentsInfo
          image={props.image}
          name={props.name}
          id={props.id}
          date={props.date}
          info={props.info}
          onClick={toggleHandler}
        />
        {toggle === true ? <Update /> : null}
      </div>
    </>

  );

}