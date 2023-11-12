import Avata from "./Avata";
// import "../App.css";

export default function Profile({image,isNew,name,title}) {

  return(
    <div className="profile">
      <Avata image={image}
              isNew={isNew} 
      />
      <h1>{name}</h1>
      <h2>{title}</h2>
    </div>
  )
  
};

// && 는 if조건식의 참일 때의 문법이다.

