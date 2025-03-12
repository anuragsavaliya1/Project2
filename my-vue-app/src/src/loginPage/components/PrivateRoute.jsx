import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../../Utils";

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
