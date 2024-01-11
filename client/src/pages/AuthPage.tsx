import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="bg-[url(./main_bg.jpg)] bg-center bg-cover w-3/4 h-3/4 rounded-xl shadow-xl flex flex-col justify-between p-16 ">
      <span className="flex flex-col gap-2">
        <h1 className="text-6xl ">Profilling System</h1>
        <i className="text-xl">for Person w/ Disabilities</i>
      </span>
      <span className="flex flex-col gap-2">
        <Button
          to="admin/login"
          as={Link}
          radius="sm"
          className="shadow-xl w-[300px] h-[50px] text-white font-bold text-md bg-gradient-to-tr from-indigo-500 via-blue-500 to-sky-300 hover:-translate-y-1 duration-500 transition-all "
        >
          Login as Admin
        </Button>
        <Button
          to="user/login"
          as={Link}
          radius="sm"
          className="shadow-xl w-[300px] h-[50px] text-white font-bold text-md bg-gradient-to-tr from-indigo-500 via-blue-500 to-sky-300 hover:-translate-y-1 duration-500 transition-all "
        >
          Login as User
        </Button>
      </span>
    </div>
  );
};
export default AuthPage;
