import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gnbStyles from "../../../styles/header/gnb/gnb.module.css";

export default function GnbList({ menu }) {

  const [navList, setNavList] = useState([]);
  const [active, setActive] = useState(0);

  // console.log(menu[0].nav1);


  // console.log(menu);

  useEffect(() => {

    if (menu.length >= 1) {

      //props안에 배열이 들어가기전에 map이 먼저 실행된다.
      //배열이 들어있을 경우 실행되게끔 조건을 걸어 오류를 막아준다.

      menu[0].nav1.map((val) => {

        setNavList((nav) => [...nav, val])

      });

    }



  }, [menu]);

  useEffect(() => {

    if (navList.length >= 1) {
      // navList안에 값이 들어가기 전에 console이 실행되어 오류가 난다.
      // Cannot convert undefined or null to object
      console.log(Object.values(navList[0]));
      console.log(Object.keys(navList[0]));
    }

  }, [navList])


  // props로 받은 menu가 변경될 때마다 실행
  // console.log(navList);
  // useEffect에 의존성 배열에 부모로부터 받은 props menu가 변경될 때마다 실행하게 해주지않으면
  // 자식 컴포넌트가 업데이트 되지 않아서 값이 나오지않는다. 
  // setNavList에 값이 담기기 전에 console.log가 먼저 실행된다.

  return (
    <>
      {navList.length >= 1 ? navList.map((node, idx) =>
        <li className={idx === active ? `${gnbStyles.gnb_li} ${gnbStyles.active}` : `${gnbStyles.gnb_li}`} onClick={() => {
          setActive(idx);
        }}>
          <Link to={"/" + Object.keys(node)} className={gnbStyles.gnb_link}>
            {Object.values(node)}
          </Link>
        </li >
      ) : null
      }
    </>
  );
}

