import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter: FC = () => {
  return (
    <div className="page-wrapper">
    <Suspense fallback={<h1>Загрузка...</h1>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
    </div>
  );
};

export default AppRouter;
