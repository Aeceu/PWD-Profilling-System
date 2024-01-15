import useAdminContext from "@/hooks/admin/useAdminContext";
import useUserContext from "@/hooks/user/useUserContext";
import { Navigate, Outlet } from "react-router-dom";

type ROLES = string | undefined;

type TProps = {
  allowedRoles: ROLES[];
};

const UserProtectedRoute = ({ allowedRoles }: TProps) => {
  const { token, user } = useUserContext();
  const { admin } = useAdminContext();

  return allowedRoles.includes(user?.role) ? (
    <Outlet />
  ) : token || user ? (
    <Navigate to="/" />
  ) : admin ? (
    <Navigate to="/admin" />
  ) : (
    <Navigate to="/auth" />
  );
};
export default UserProtectedRoute;
