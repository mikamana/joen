import "../App.css";

export default function Avata({image,isNew}){

  return(

    <div>
      <img className="img" src={image} alt="이미지"/>  
      {isNew && <span className="new">New</span>}
    </div>
    
  )
  
}