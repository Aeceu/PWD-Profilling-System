import { UserContext } from "@/context/userContext";
import { useContext } from "react";

const useUserContext = () => {
  const user = useContext(UserContext);

  return user;
};
export default useUserContext;
