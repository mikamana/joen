import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import MainRedux from "./components/MainRedux";
import "./css/reset.css";

const router = createBrowserRouter([

  {
    path:"/",
    element:<Main/>,
    children:[
      {
        path:"/",
        element:
          <MainRedux>
                                      
          </MainRedux>
      }
    ]
  }

])

function App() {
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
