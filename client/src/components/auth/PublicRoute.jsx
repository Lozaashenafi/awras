import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/features/userSlice';

const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  const location = useLocation();

  if (user) {
    // Redirect to home if user is already logged in
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PublicRoute; 