import {
  EyeIcon,
  EyeSlashIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TAdminLogin } from "../../types/admin";
import { zodResolver } from "@hookform/resolvers/zod";
import { adminLoginSchema } from "../../lib/adminSchema";

const AdminLoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TAdminLogin>({ resolver: zodResolver(adminLoginSchema) });

  const onSubmit: SubmitHandler<TAdminLogin> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 h-full relative flex flex-col items-center justify-end gap-4  p-4  "
    >
      <h1 className="absolute top-10 right-0 bg-green-300 text-white p-2 rounded=md text-xl font-bold ">
        Login as Admin
      </h1>
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register("email")}
        radius="none"
        variant="faded"
        label="email"
        className=""
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        {...register("password")}
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
        type="submit"
        isDisabled={isSubmitting}
        radius="none"
        size="lg"
        className="text-xl font-bold w-full bg-blue-500 text-white"
      >
        {isSubmitting ? "Loggin in..." : "Log in"}
      </Button>
      <div className="text-lg w-full flex items-center gap-1">
        <div className="w-full h-[1px] border-b border-black" />
        <p className="text-[14px]">or</p>
        <div className="w-full h-[1px] border-b border-black" />
      </div>
      <Button
        to="/auth/admin/signup"
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
export default AdminLoginForm;
