import React, { useState } from "react";
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";
import { getUser, removeUser } from "../util/localStorage.js";
export default function Navbar() {

  const userInfo = getUser();
  const navigate = useNavigate();
  const [reset, setReset] = useState(false)
  // console.log(navigate);

  const handleLogout = () => {

    removeUser();
    navigate("/");

  }

  return (
    <header>
      <Link to="/" className="header_left">
        <FiShoppingBag />
        <span>Shoppy</span>
      </Link>
      <nav className="header_right">
        {userInfo ? (
          <>
            <span>[{userInfo.id}]님 반갑습니다!</span>
            <Link to="/products">Products</Link>
            <Link to="/carts">Carts</Link>
            <Link to="/products/new"><BsFillPencilFill /></Link>
            <button type="button" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/products">Products</Link>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>SignUp</button></Link>
          </>

        )





        }
      </nav>

    </header >
  );
}