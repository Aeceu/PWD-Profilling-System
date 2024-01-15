import { useEffect, useState } from "react";
import useRefreshToken from "../../hooks/admin/useRefreshToken";
import useAdminContext from "../../hooks/admin/useAdminContext";
import { Outlet, useNavigate } from "react-router-dom";

const AdminPersistsLogin = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const refresh = useRefreshToken();
  const { admin, token } = useAdminContext();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
        navigate("/auth");
      } finally {
        setLoading(false);
      }
    };

    !admin || !token ? verifyRefreshToken() : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen flex p-4 justify-center">
          <h1>Loading ....</h1>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};
export default AdminPersistsLogin;
