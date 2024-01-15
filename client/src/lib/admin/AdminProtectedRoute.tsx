import useAdminContext from "@/hooks/admin/useAdminContext";
import useUserContext from "@/hooks/user/useUserContext";
import { Navigate, Outlet } from "react-router-dom";

type ROLES = string | undefined;

type TProps = {
  allowedRoles: ROLES[];
};

const AdminProtectedRoute = ({ allowedRoles }: TProps) => {
  const { token, admin } = useAdminContext();
  const { user } = useUserContext();

  return allowedRoles.includes(admin?.role) ? (
    <Outlet />
  ) : token || admin ? (
    <Navigate to="/admin" />
  ) : user ? (
    <Navigate to="/" />
  ) : (
    <Navigate to="/auth" />
  );
};
export default AdminProtectedRoute;
