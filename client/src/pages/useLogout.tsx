import { useNavigate } from "react-router-dom";
import useAdminContext from "../hooks/useAdminContext";
import axios from "../api/axios";

export const useAdminLogout = () => {
  const { updateAdmin, updateToken } = useAdminContext();
  const navigate = useNavigate();
  const logout = async () => {
    updateAdmin(null);
    updateToken("");

    try {
      const res = await axios.get("/admin/logout", {
        withCredentials: true,
      });
      console.log(res.data);
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};
