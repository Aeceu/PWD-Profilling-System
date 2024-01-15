import useAdminContext from "@/hooks/admin/useAdminContext";
import { useAdminLogout } from "@/hooks/admin/useLogout";
import { useUserLogout } from "@/hooks/user/useLogout";
import useUserContext from "@/hooks/user/useUserContext";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NavButtons = () => {
  const admin_logout = useAdminLogout();
  const user_logout = useUserLogout();
  const { user } = useUserContext();
  const { admin } = useAdminContext();

  if (user) {
    return (
      <span className="flex items-center gap-2">
        <h1 className="text-xs">{user?.email}</h1>
        <Button
          as={Link}
          to={`profile/${user.id}`}
          radius="none"
          size="sm"
          className="px-8 py-1 bg-blue-700 text-white font-semibold"
        >
          My Profile
        </Button>
        <Button
          onClick={user_logout}
          radius="none"
          size="sm"
          className="px-8 py-1 bg-orange-500 text-white font-semibold"
        >
          Log out
        </Button>
      </span>
    );
  }

  if (admin) {
    return (
      <span className="flex items-center gap-2">
        <h1 className="text-xs">{admin?.email}</h1>
        <Button
          radius="none"
          size="sm"
          className="px-8 py-1 bg-blue-700 text-white font-semibold"
        >
          My Profile
        </Button>
        <Button
          radius="none"
          size="sm"
          className="px-8 py-1 bg-green-700 text-white font-semibold"
        >
          Dashboard
        </Button>
        <Button
          onClick={admin_logout}
          radius="sm"
          size="sm"
          className="bg-orange-500 text-white font-semibold"
        >
          Log out
        </Button>
      </span>
    );
  }

  return (
    <span className="flex items-center gap-2">
      <Button
        as={Link}
        to="/auth/user/login"
        radius="none"
        size="sm"
        className="px-8 py-1 bg-orange-500 text-white font-semibold"
      >
        Log in
      </Button>
      <Button
        to="/auth/user/signup"
        as={Link}
        radius="none"
        size="sm"
        className="px-8 py-1 border border-orange-500 bg-black text-white font-semibold"
      >
        Sign up
      </Button>
    </span>
  );
};
export default NavButtons;
