import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';
import DayBestSeller from './pages/DayBestSeller';
import MonthWeekBestSeller from './pages/MonthWeekBestSeller';
import HotPriceBestSeller from './pages/HotPriceBestSeller';
import SteadySeller from './pages/SteadySeller';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    children : [
      { index : '/', element : <BestSeller /> },
      { path : '/realtime', element : <RealTimeBestSeller /> },
      { path : '/day', element : <DayBestSeller /> },
      { path : '/monthweek', element : <MonthWeekBestSeller /> },
      { path : '/hotprice', element : <HotPriceBestSeller /> },
      { path : '/steady', element : <SteadySeller /> },
    ],  
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

