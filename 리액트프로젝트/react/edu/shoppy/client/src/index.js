import React from 'react';
import ReactDOM from 'react-dom/client';
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
import SignUp from './pages/SignUp';
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
        { path : '/signup', element : <SignUp />  },
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

reportWebVitals();
