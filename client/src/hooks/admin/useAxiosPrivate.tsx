import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { axiosPrivate } from "../../api/axios";
import useAdminContext from "./useAdminContext";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { token } = useAdminContext();
  useEffect(() => {
    const requestInterceptors = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (err) => Promise.reject(err)
    );

    const responseInterceptors = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (err) => {
        const prevRequest = err?.config;
        if (err.response.status === 403 && !prevRequest?.send) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(err);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestInterceptors);
      axiosPrivate.interceptors.response.eject(responseInterceptors);
    };
  }, [refresh, token]);
};

export default useAxiosPrivate;
