import axios from "../api/axios";
import useAdminContext from "./useAdminContext";

const useRefreshToken = () => {
  const { updateToken, updateAdmin } = useAdminContext();

  const refresh = async () => {
    const res = await axios.get("/admin/refresh", {
      withCredentials: true,
    });

    updateAdmin(res.data.accessToken);
    updateToken(res.data.admin);
    return res.data;
  };
  return refresh;
};
export default useRefreshToken;
