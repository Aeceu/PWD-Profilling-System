import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import useUserContext from "./useUserContext";

export const useUserLogout = () => {
  const { setUser, setToken } = useUserContext();
  const navigate = useNavigate();
  const logout = async () => {
    setUser(null);
    setToken(null);

    try {
      const res = await axios.get("/user/logout", {
        withCredentials: true,
      });
      alert(res.data);
      console.log(res.data);
      navigate("/auth");
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};
