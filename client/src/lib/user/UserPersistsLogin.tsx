import useRefreshToken from "@/hooks/user/useRefreshToken";
import useUserContext from "@/hooks/user/useUserContext";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const UserPersistsLogin = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const refresh = useRefreshToken();
  const { user, token } = useUserContext();

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

    !user || !token ? verifyRefreshToken() : setLoading(false);
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
export default UserPersistsLogin;
