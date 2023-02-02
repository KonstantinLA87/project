import { Suspense, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {

  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Change Theme</button>
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