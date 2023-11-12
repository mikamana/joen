import { Routes, Route } from 'react-router-dom';
import GnbWrap from './components/header/GnbWrap';
import Header from './components/header/Header';
import LogoWrap from './components/header/LogoWrap';
import "./css/header.css";
import "./css/contents.css";
import "./css/detail.css";
import Donga from "./pages/Donga";
import Gyeongin from "./pages/Gyeongin";
import Joseon from "./pages/Joseon";
import Seoul from "./pages/Seoul";
import Asia from "./pages/Asia";
import DetailPage from './components/detail/DetailPage';

function App() {
  return (
    <>
      <Header>
        <LogoWrap />
        <GnbWrap />
      </Header>
      <Routes>
        <Route path="/" element={<Donga />}>
        </Route>
        <Route path="/:id" element={<DetailPage />}></Route>
        <Route path="/jos" element={<Joseon />} />
        <Route path="/asa" element={<Asia />} />
        <Route path="/gyg" element={<Gyeongin />} />
        <Route path="/sel" element={<Seoul />} />
        <Route path="*" element={<div>404페이지</div>} />
      </Routes>
    </>
  );
}

export default App;
