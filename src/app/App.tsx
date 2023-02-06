import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

const App = () => {
  
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <NavBar />
      <AppRouter />
      <Button> Never </Button>
    </div>
  );
};

export default App;