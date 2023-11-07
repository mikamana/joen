// import Video from './pages/Video';
import Root from "./pages/Root";
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Video from "./pages/Video";
import Home from "./pages/Home";
import VideoDetail from "./pages//video/VideoDetail";
const router = createBrowserRouter([

  {
    path : "/",
    element : <Root />,
    errorElement : <NotFound />,
    children : [
      {
        index : "/",
        element : <Home />
      },
      {
        path : "/video",
        element : <Video />
      },
      {
        path : "/video/:videoId",
        element : <VideoDetail />
      },
    ],
  },
// "/" 루트는 path로 네이밍하지않고 index로 네이밍
  
])
// 리액트의 router는 spa방식이라 첫페이지는 존재해야함
//  http://localhost:3001/ 루트컨텍스트라고 함


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
