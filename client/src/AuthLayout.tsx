import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4 bg-lime-200 ">
      <Outlet />
    </div>
  );
};
export default AuthLayout;
