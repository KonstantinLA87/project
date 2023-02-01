import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './index.scss';

const App = () => {
  return (
    <div className="app">
      <NavLink to={'/'}>Домой</NavLink>
      <NavLink to={'/about'}>О нас</NavLink>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}/>
          <Route path="/about" element={<AboutPageAsync />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;