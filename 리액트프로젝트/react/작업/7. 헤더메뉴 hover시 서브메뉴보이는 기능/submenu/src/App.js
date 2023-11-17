import { useState } from 'react';
import './App.css';
function App() {

  let [showHover, setShowHover] = useState(false)
  let [showHoverFirst, setShowHoverFirst] = useState(false)

  const handlerMouse = () => {

    if (showHover === true) {
      setShowHover(false)
    } else {
      setShowHover(true)
    }

  }
  const handlerMouseLeave = () => {

    if (showHover === true) {
      setShowHover(false)
    } else {
      setShowHover(true)
    }

  }

  return (
    <header className="header_wrap">
      <nav className='header_gnb'>
        <ul className='header_gnb_list'>
          <li className='header_gnb_list_li' onMouseOver={handlerMouse} onMouseLeave={handlerMouseLeave} >가나다라
            {showHover === true ?
              <ul
                className={showHover ? "header_gnb_list_li_submenu active" : "header_gnb_list_li_submenu"}>
                <li className="header_gnb_list_li_submenu_li">가나</li>
                <li className="header_gnb_list_li_submenu_li">다라</li>
                <li className="header_gnb_list_li_submenu_li">마바</li>
                <li className="header_gnb_list_li_submenu_li">사아</li>
                <li className="header_gnb_list_li_submenu_li">자카</li>
                <li className="header_gnb_list_li_submenu_li">타파</li>
              </ul> : null}
          </li>
          <li className='header_gnb_list_li' onMouseOver={handlerMouse} onMouseLeave={handlerMouseLeave} >가나다라
            {showHover === true ?
              <ul
                className={showHover ? "header_gnb_list_li_submenu active" : "header_gnb_list_li_submenu"}>
                <li className="header_gnb_list_li_submenu_li">가나</li>
                <li className="header_gnb_list_li_submenu_li">다라</li>
                <li className="header_gnb_list_li_submenu_li">마바</li>
                <li className="header_gnb_list_li_submenu_li">사아</li>
                <li className="header_gnb_list_li_submenu_li">자카</li>
                <li className="header_gnb_list_li_submenu_li">타파</li>
              </ul> : null}
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default App;
