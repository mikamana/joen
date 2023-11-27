import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { RouterProvider, createBrowserRouter } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
      path : '/',
      element : <App />,
      errorElement : <NotFound />,
      children : [
        { index : true, path : '/', element : <Home />   },
        { path : '/products', element : <AllProducts />  },
        { path : '/products/:pid', element : <ProductDetail />  },
        { path : '/products/new', element : <NewProducts />  },
        { path : '/carts', element : <MyCart />  },
        { path : '/login', element : <Login />  },
        { path : '/signup', element : <Signup />  },
        { path : '/order', element : <MyOrder />  },
      ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
