import axios from "@/api/axios";
import useUserContext from "./useUserContext";

const useRefreshToken = () => {
  const { setToken, setUser } = useUserContext();

  const refresh = async () => {
    const res = await axios.get("/user/refresh", {
      withCredentials: true,
    });

    setUser(res.data.user);
    setToken(res.data.accessToken);

    return res.data;
  };
  return refresh;
};
export default useRefreshToken;
