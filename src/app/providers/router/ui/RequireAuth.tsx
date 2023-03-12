import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, Route } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export function RequireAuth({children}: any) {
  let auth = useSelector(getUserAuthData);
  let location = useLocation();

  if(!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children;
}