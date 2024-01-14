import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import NewProducts from './pages/NewProducts';
import MyCart from './pages/MyCart';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyOrder from './pages/MyOrder';
import { CookiesProvider } from 'react-cookie';
import MyCount3 from './pages/MyCount3';
import MyInfo from './pages/MyInfo';
import MyCountRedux from './pages/MyCountRedux';
// import {createStore} from 'redux';
// deprecated(취소선) > 리덕스라는 라이브러리에는 있지만, 앞으로 지원하지않으려는 상태(다음번 버전에는 추가되지않음)
// 하지만 createStore은 무늬만 deprecated > 그대로 사용해도된다.
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { Provider } from "react-redux";
import rootReducer from './modules_redux/rootReducer';
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import {configureStore} from "@reduxjs/toolkit";
import reduxCount from './modules_redux/reduxCount';
import  { cartListSlice } from './modules_redux/reduxCartList';
import reduxQtyList from './modules_redux/reduxQtyList';
import { cartListDelete } from './modules_redux/reduxDelete';
/* 스토어 생성 */

const store = configureStore(
  {
  reducer : {
    reduxCount,
    reduxCartList : cartListSlice.reducer,
    reduxQtyList,
    reduxDelete : cartListDelete.reducer
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <AllProducts /> },
      { path: '/products/:pid', element: <ProductDetail /> },
      { path: '/products/new', element: <NewProducts /> },
      { path: '/carts', element: <MyCart /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/order', element: <MyOrder /> },
      { path: '/count', element: <MyCount3 />},
      { path : '/info', element: <MyInfo />},
      { path : '/redux', element: <MyCountRedux />},
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
