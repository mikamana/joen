import { createContext, useContext, useEffect, useState } from "react";
import styles from "../style.module.css";

export const DarkModeContext = createContext();
// 데이터를 콘텍스트에 담는다.

export function DarkModeProvider({ children }) {
  // ui적으로 뭔가를 하지는 않음
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    updateDarkMode(!darkMode);
  };


  useEffect(() => {

    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    // dark모드인지 아닌지 로컬스토리지로부터 확인함
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, [])


  return (

    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* 자식컴포넌트를 받아오는 컴포넌트를 만들고 자식 컴포넌트들을 위에서 만든(Context에서 제공해주는) Provider로 감싸면되고,
      자식 컴포넌트와 공유하고싶은 데이터가 있다면 value에 지정해주면 된다.
      */}
      {children}
      {/* 외부로부터 받아온 자식을 보여준다. */}
    </DarkModeContext.Provider >

  )

}
// 우산을 만든다.(우산 컴포넌트)

export const useDarkMode = () => useContext(DarkModeContext);

function updateDarkMode(darkMode) {

  if (darkMode) {
    document.documentElement.classList.add(styles.dark);
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove(styles.dark);
    localStorage.theme = 'light';

  }

}