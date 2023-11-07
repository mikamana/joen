import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from "./pages/Root";
import BestSeller from "./pages/BestSeller";
import RealTimeBestSeller from "./pages/RealTimeBestSeller";
import DayBestSeller from "./pages/DayBestSeller";
import HotPriceBestSeller from "./pages/HotPriceBestSeller";
import MonthWeekBestSeller from "./pages/MonthWeekBestSeller";
import SteadySeller from "./pages/SteadySeller";

// path경로와 element 컴포넌트의 네이밍을 다르게 주어 보안상 어떤 컴포넌트를 사용하는지 알 수 없게한다.

const router = createBrowserRouter([

  {
    path: "/",
    element:<Root />,
    children : [
      {index : '/', element : <BestSeller />},
      {path : 'realtime', element : <RealTimeBestSeller />},
      {path : 'day', element : <DayBestSeller />},
      {path : 'hotprice', element : <HotPriceBestSeller />},
      {path : 'monthweek', element : <MonthWeekBestSeller />},
      {path : 'steady', element : <SteadySeller />},
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
