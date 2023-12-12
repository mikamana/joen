import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ModalContents from "./components/modal/ModalContents";
import GameContents from "./components/game/GameContents";
import WebContents from "./components/web/WebContents";
import Modal from "./pages/Modal";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Modal />,
    children:[
      {
        path:"/modal",
        element:<ModalContents />
      },
      {
        path:"/game",
        element:<GameContents />
      },
      {
        path:"/web",
        element:<WebContents />
      }
    ]
  }

])
// RouterProvider를 이용해서 구성요소들을 전달하고 활성화 합니다

function App() {

  return (

    <>
      <RouterProvider router={router} />
    </>

  );

}

export default App;
