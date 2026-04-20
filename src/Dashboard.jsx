import { Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function Dashboard() {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/connexion" replace />;
  }

  if (auth.user?.role === 'admin') {
    return <Navigate to="/superadmin" replace />;
  }

  return <Navigate to="/client" replace />;
}

export default Dashboard;
