import React, { useEffect, useState } from 'react';
import styles from "../../styles/header/header.module.css";
import GnbList from './gnb/GnbList';
import gnbStyles from "../../styles/header/gnb/gnb.module.css";

// 여러 컴포넌트를 사용할 때 각 컴포넌트에 스타일을 다르게 주려면
// 컴포넌트에서 사용하는 css 파일을 import 시킨 후에
// 그 컴포넌트의 css파일안에 내가 사용하고자 하는 태그안에 넣어서 사용
// 컴포넌트 스타일을 각각 다르게 주기에는 용이하지만
// 이 방식으로 하게되면 해당 파일에 적용된 css가 어떤 구조로
// 이루어져있는지 한 눈에 파악하기 어렵다.

export default function Header() {

  const [menuList, setMenuList] = useState([]);

  useEffect(() => {

    fetch("/data/nav_menu.json")
      .then((result) => result.json())
      .then((data) => {

        setMenuList(data);

      })

  }, [])// 데이터만 담아놓는 컴포넌트는 따로 없고, public 안에 data를 json으로 저장하여 사용한다.

  // console.log(menuList);

  return (
    <>
      <header className={styles.header_wrap}>
        <h1 className={styles.logo}>로고</h1>
        <nav className={styles.gnb_wrap}>
          <ul className={gnbStyles.gnb_list}>
            <GnbList menu={menuList} />
          </ul>
        </nav>
      </header>
    </>
  )

}
