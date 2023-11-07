import NotFound from "./pages/NotFound";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from "./pages/Root";

const router = createBrowserRouter([

  {
    path: "/",
    Element:<Root />,
    errorElement: <NotFound />
  }

])

function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
