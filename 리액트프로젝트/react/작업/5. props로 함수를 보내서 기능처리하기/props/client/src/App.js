import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Detail from "./components/Jeongtae/Detail";
import Home from "./components/Home/Home";
import Login from "./components/Gangmin/Login";
import Join from "./components/Gangmin/Join";
import Basket from "./components/Geunsang/Basket";
import MyPage from "./components/Geunsang/MyPage";
import Order from "./components/Geunsang/Order";
import Admin from "./components/Hana/admin";

const App = () => {

    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/order" element={<Order />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/review" element={<Review />} />
        </Routes>
    );

}

export default App;

