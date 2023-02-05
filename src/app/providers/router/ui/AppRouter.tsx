import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Загрузка...</h1>}>
      {console.log(routeConfig)}
      {console.log(Object.values(routeConfig))}
      <Routes>
        {Object.values(routeConfig).map(({element, path}) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;