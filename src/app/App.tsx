import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar/ui/NavBar';
import { Sidebar } from 'widgets/Sidebar';
import { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { getUserInited } from '../entities/User/model/selectors/getUserInited/getUserInited';

const App: FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};

export default App;
