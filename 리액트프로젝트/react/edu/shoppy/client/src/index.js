import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import Home from './pages/Home';
import MyCart from './pages/MyCart';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import App from './App';
import NotFound from './pages/NotFound';
import "./css/header.css";
const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    errorElement:<NotFound/>,
    children: [
      { index: "/", element: <Home /> },
      { path: "/products", element: <AllProducts />},
      { path: "/products/:id", element: <ProductDetail /> },
      { path: "/products/new", element: <NewProduct /> },
      { path: "/carts", element: <MyCart /> }
    ]
  }
  // {
  //   path: "/products", element: <AllProducts />, children: [
  //     { path: ":id", element: <ProductDetail /> },
  //     { path: "/products/new", element: <NewProduct /> }
  //   ]
  // },
  // { path: "/carts", element: <MyCart /> },
  // outlet 사용안할시

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
