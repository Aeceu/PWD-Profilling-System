import axios from "@/api/axios";
import useAdminContext from "./useAdminContext";

const useRefreshToken = () => {
  const { setToken, setAdmin } = useAdminContext();

  const refresh = async () => {
    const res = await axios.get("/admin/refresh", {
      withCredentials: true,
    });

    setAdmin(res.data.admin);
    setToken(res.data.accessToken);
    return res.data;
  };
  return refresh;
};
export default useRefreshToken;
