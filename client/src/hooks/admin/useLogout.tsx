import { useNavigate } from "react-router-dom";
import useAdminContext from "./useAdminContext";
import axios from "../../api/axios";

export const useAdminLogout = () => {
  const { setAdmin, setToken } = useAdminContext();
  const navigate = useNavigate();
  const logout = async () => {
    setAdmin(null);
    setToken(null);

    try {
      const res = await axios.get("/admin/logout", {
        withCredentials: true,
      });
      console.log(res.data);
      alert(res.data);
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};
