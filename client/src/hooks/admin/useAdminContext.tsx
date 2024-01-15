import { useContext } from "react";
import { AdminContext } from "../../context/adminContext";

const useAdminContext = () => {
  const user = useContext(AdminContext);

  return user;
};
export default useAdminContext;
