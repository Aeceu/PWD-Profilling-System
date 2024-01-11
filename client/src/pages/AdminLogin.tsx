import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import AdminLoginForm from "../components/forms/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div className="relative w-3/4 flex items-center gap-2 bg-white h-screen">
      <Link
        to="/auth"
        className="bg-red-500 text-white px-2 py-1 rounded-b-md  text-sm absolute top-0 left-5 flex items-center hover:scale-105 duration-200 transition-all cursor-pointer shadow-xl"
      >
        <ChevronLeftIcon className="w-5" /> Cancel
      </Link>
      <img
        src="/Loginbg.png"
        alt="loginbg"
        className="bg-cover bg-center w-1/2"
      />
      <AdminLoginForm />
    </div>
  );
};
export default AdminLogin;
