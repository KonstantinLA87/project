import './styles/index.scss';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
  
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Change Theme</button>
      <NavLink to={'/'}>Домой</NavLink>
      <NavLink to={'/about'}>О нас</NavLink>
      <AppRouter />
    </div>
  );
};

export default App;