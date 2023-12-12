import React, { useContext } from 'react';
import styles from "./style.module.css";
import { useDarkMode } from './context/DarkModeContext';

export default function IconWrap() {

  const { darkMode, toggleDarkMode } = useDarkMode();




  return (
    <>
      <div className={darkMode ? `${styles.mode_icon} ` : `${styles.dark_icon}`} onClick={toggleDarkMode}>
      </div>
    </>
  )
}
