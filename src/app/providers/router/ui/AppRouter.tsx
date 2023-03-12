import { FC, memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter: FC = () => {
  const renderWithWrapper = useCallback(({path, authOnly, element}: AppRoutesProps) => {

    return (
      <Route 
        key={path} 
        path={path} 
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element} 
      />
    )
  }, [])

  return (
    <div className="page-wrapper">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
    </div>
  );
};

export default memo(AppRouter);
