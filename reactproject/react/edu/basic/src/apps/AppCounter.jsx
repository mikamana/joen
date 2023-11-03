import Profile from '../components/Profile';
import Counter from "../components/Counter";
import "./App.css";
import { useState } from 'react';
function App() {

  const [totalCount, setTotalCount] = useState(0)

  const handleClick = (event) => {

    setTotalCount((count) => count + 1);
  
  };
  
  // let count = Counter()

  // console.log(count);

  return (

    <>
      <div className='container'>
        <div className="banner">
          Total : {totalCount}
        </div>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
      </div>

    </>
  )
}


export default App;
