import './css/reset.css';
import './css/app.css';
import { useState } from 'react';

function App() {

  const [createContent, setCreateContent] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="inner">
          <div className="button_wrap">
            <button type="button" onClick={()=> {createContent == false ? setCreateContent(true) : setCreateContent(false)}}>버튼</button>
          </div>
        </div>
      </header>
      <main>
        <div className="contents_wrap">
          <div className="content">
            { createContent == true ? <Modal title="가나다"/> : null}
          </div>
        </div>
      </main>
    </div>
  );
}

function Modal(props){

  return(

    <div>
      <h2>{props.title}</h2>
      <p>{props.name}</p>
    </div>

  )

}

export default App;
