import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Modal from "./pages/Modal";
import Game from "./pages/Game";
import Web from "./pages/Web";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Modal />
  },
  {
    path: "/game",
    element: <Game />
  },
  {
    path: "/web",
    element: <Web />
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
