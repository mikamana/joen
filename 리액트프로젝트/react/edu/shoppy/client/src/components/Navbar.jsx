import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Navbar() {

  return (

    <>
      <header className="main_header">
        <Link to='/'>
          <h1><FiShoppingBag />Shoppy</h1>
        </Link>
        <nav>
          <Link className='nav_link' to='/products'>Products</Link>
          <Link className='nav_link' to='/carts'>Carts</Link>
          <Link className='nav_link' to='/products/new'>
            <BsFillPencilFill />New Products
          </Link>
        </nav>
      </header >
    </>

  );


}




{/* <nav className="header_gnb">
          <ul className="header_gnb_list">
            <li className="header_gnb_list_li">
              <ul className="header_gnb_submenu_list">
                <li className="header_gnb_submenu_list_li">
                  서브리스트1
                </li>
                <li className="header_gnb_submenu_list_li">
                  서브리스트2
                </li>
                <li className="header_gnb_submenu_list_li">
                  서브리스트3
                </li>
              </ul>
            </li>
            <li className="header_gnb_list_li">
              나
            </li>
            <li className="header_gnb_list_li">
              다
            </li>
            <li className="header_gnb_list_li">
              라
            </li>
          </ul>
        </nav> */}