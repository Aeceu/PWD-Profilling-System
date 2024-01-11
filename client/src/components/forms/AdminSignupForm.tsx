import {
  EnvelopeOpenIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { adminSchema } from "../../lib/adminSchema";
import { TAdminSignup } from "../../types/admin";

const AdminSignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TAdminSignup>({ resolver: zodResolver(adminSchema) });

  const onSubmit: SubmitHandler<TAdminSignup> = (data: TAdminSignup) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative grid grid-cols-2 gap-2 p-4 w-full justify-end"
    >
      <h1 className="bg-green-400 text-white text-2xl col-span-2 w-max px-4 py-1 absolute -top-14 left-0">
        Sign up
      </h1>
      <Input
        variant="faded"
        isInvalid={!!errors.firstName}
        errorMessage={errors.firstName?.message}
        {...register("firstName")}
        radius="sm"
        label="First Name"
        className=""
        placeholder=" "
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.lastName}
        errorMessage={errors.lastName?.message}
        {...register("lastName")}
        radius="sm"
        label="Last Name"
        className=""
        placeholder=" "
        startContent={<UserIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.email}
        errorMessage={errors.email?.message}
        {...register("email")}
        radius="sm"
        label="Email"
        className=""
        placeholder=" "
        startContent={<EnvelopeOpenIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.phone}
        errorMessage={errors.phone?.message}
        {...register("phone")}
        radius="sm"
        label="Phone"
        className=""
        placeholder=" "
        startContent={<PhoneIcon className="w-4" />}
      />
      <Input
        variant="faded"
        isInvalid={!!errors.username}
        errorMessage={errors.username?.message}
        {...register("username")}
        radius="sm"
        label="Create username"
        className="mt-4"
        placeholder=" "
      />
      <Input
        variant="faded"
        isInvalid={!!errors.password}
        errorMessage={errors.password?.message}
        {...register("password")}
        type="password"
        label="Create password"
        className="mt-4"
        placeholder=" "
      />
      <Select
        variant="faded"
        {...register("position")}
        isInvalid={!!errors.position}
        errorMessage={errors.position?.message}
        label="Select Position"
        placeholder=" "
        className="col-span-2"
      >
        <SelectItem key={"Administrative"} value="Administrative">
          Administrative
        </SelectItem>
        <SelectItem key={"Employee"} value="Employee">
          Employee
        </SelectItem>
      </Select>
      <Checkbox className="w-full col-span-2">
        <i className=" text-xs">
          By checking this box, you are agree to our terms and policies
        </i>
      </Checkbox>
      <Button
        type="submit"
        isDisabled={isSubmitting}
        className="bg-blue-600 text-white font-bold text-xl col-span-2 w-full"
      >
        {isSubmitting ? "Signing up...." : "Sign up"}
      </Button>
      <div className="col-span-2 text-lg w-full flex items-center gap-1">
        <div className="w-full h-[1px] border-b border-black" />
        <p className="text-[14px]">or</p>
        <div className="w-full h-[1px] border-b border-black" />
      </div>
      <Button
        to="/auth/admin/login"
        as={Link}
        className="col-span-2  text-lg font-bold w-full border border-blue-500 bg-white text-blue-500"
      >
        Login to your account
      </Button>
    </form>
  );
};
export default AdminSignupForm;
