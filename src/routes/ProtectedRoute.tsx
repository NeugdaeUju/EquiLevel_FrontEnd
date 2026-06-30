import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks.ts';

function ProtectedRoute() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;