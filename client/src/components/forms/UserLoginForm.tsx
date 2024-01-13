import {
  ChevronLeftIcon,
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { userLoginSchema } from "../../lib/userSchema";
import { TUserLogin } from "../../types/user";
import axios from "../../api/axios";

const UserLoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TUserLogin>({ resolver: zodResolver(userLoginSchema) });

  const onSubmit: SubmitHandler<TUserLogin> = async (data) => {
    try {
      const res = await axios.post("/user/login", data);
      alert(res.data.message);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full relative grid grid-cols-1 place-items-center gap-4 p-4  bg-white"
    >
      <Link
        to="/auth"
        className="bg-red-500 text-white px-2 py-1 rounded-b-md  text-sm absolute top-0 left-5 flex items-center hover:scale-105 duration-200 transition-all cursor-pointer shadow-xl"
      >
        <ChevronLeftIcon className="w-5" /> Cancel
      </Link>
      <h1 className="mt-5  text-2xl font-bold">Login as User</h1>
      <img src="/loginuser.png" alt="user" className=" w-[300px]" />
      <Input
        {...register("email")}
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        radius="none"
        variant="faded"
        label="email"
        className=""
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        {...register("password")}
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
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
        isDisabled={isSubmitting}
        type="submit"
        radius="none"
        size="lg"
        className="text-xl font-bold w-full bg-blue-500 text-white"
      >
        {isSubmitting ? "Logging in...." : "Log in"}
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
