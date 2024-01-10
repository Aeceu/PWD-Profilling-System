import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserLoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <form className="h-full relative grid grid-cols-1 place-items-center gap-4 p-4  bg-white">
      <Link
        to="/auth"
        className="bg-red-500 text-white px-2 py-1 rounded-b-md  text-sm absolute top-0 left-5 flex items-center hover:scale-105 duration-200 transition-all cursor-pointer shadow-xl"
      >
        <ChevronLeftIcon className="w-5" /> Cancel
      </Link>
      <h1 className="mt-5  text-2xl font-bold">Login as User</h1>
      <img src="/loginuser.png" alt="user" className=" w-[300px]" />
      <Input
        radius="none"
        variant="faded"
        label="email"
        className=""
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        type={showPass ? "text" : "password"}
        radius="none"
        variant="faded"
        label="password"
        className=""
        startContent={<KeyIcon className="w-4" />}
        endContent={
          showPass ? (
            <EyeIcon
              onClick={() => setShowPass((prev) => !prev)}
              className="w-4 cursor-pointer"
            />
          ) : (
            <EyeSlashIcon
              onClick={() => setShowPass((prev) => !prev)}
              className="w-4 cursor-pointer"
            />
          )
        }
      />
      <Button
        radius="none"
        size="lg"
        className="text-xl font-bold w-full bg-blue-500 text-white"
      >
        Log in
      </Button>
      <div className="text-lg w-full flex items-center gap-1">
        <div className="w-full h-[1px] border-b border-black" />
        <p className="text-[14px]">or</p>
        <div className="w-full h-[1px] border-b border-black" />
      </div>
      <Button
        to="/auth/user/signup"
        as={Link}
        radius="none"
        size="lg"
        className="text-xl font-bold w-full border border-blue-500 bg-white text-blue-500"
      >
        Create an account
      </Button>
    </form>
  );
};
export default UserLoginForm;
