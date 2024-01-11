import { useContext } from "react";
import { AdminContext } from "../context/adminContext";

const useAdminContext = () => {
  const user = useContext(AdminContext);

  if (user === null) {
    throw new Error("user is undefined!");
  }

  return user;
};
export default useAdminContext;
