import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";

const PrivateRoute = ({ children }) => {
  const { user } = UseAuth();
  const location = useLocation();
  
  if (user) return children;

  return <Navigate to="/sign-in" state={location.pathname} replace={true} />;
};

export default PrivateRoute;