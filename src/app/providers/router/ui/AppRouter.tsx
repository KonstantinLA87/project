import { FC, memo, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { getUserAuthData } from 'entities/User';

const AppRouter: FC = () => {

  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if(route.authOnly && !isAuth) {
        return false;
      }
      return true;
    })
  }, [isAuth]);

  return (
    <div className="page-wrapper">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
    </div>
  );
};

export default memo(AppRouter);
