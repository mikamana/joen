import React, { useEffect, useState } from "react";
import "./css/dwitter.css";
import Contents from "./components/Contents";
import TweetList from "./components/TweetList";
import LoginForm from "./components/LoginForm";

function App() {

  const [dwitters,setDwitters] = useState([]);
  // 패치가 일어나면 저장될 곳 
  useEffect(()=>{

    fetch("data/dwitter.json")
    .then((response)=>response.json())
    .then((data)=> setDwitters(data))

  },[]) //Content Fetch  

  const [login, setLogin] = useState(false);

  const loginHandler = () =>{

    setLogin((login)=>!login)

  }

  return (

        <>
          <h1>Dwitter</h1>
          <ul>
            <TweetList onClick={loginHandler}/>
          </ul>
          {login === true ? <LoginForm /> : null}
          {dwitters.map((dwitter)=>(

            <Contents 
              image={dwitter.image}
              name={dwitter.name}
              id={dwitter.id}
              date={dwitter.date}
              info={dwitter.info}
            />

            ))}

        </>

);
}

export default App;
