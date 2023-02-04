import './styles/index.scss';
import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <NavLink to={'/'}>Домой</NavLink>
      <NavLink to={'/about'}>О нас</NavLink>
      <Suspense fallback={<h1>Загрузка...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;