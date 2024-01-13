import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import ShapeDivider from "../../components/ShapeDivider";

const userhome = () => {
  return (
    <div className=" w-full h-full ">
      <div className="relative w-full h-[calc(100vh+50px)] flex items-center justify-center">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
          <h1 className="w-3/4 text-blue-600 font-bold text-5xl">
            Identification for Inclusive Employment system
          </h1>
          <p className="text-sm w-3/4">
            is a web-based system that aims to empower persons with disabilities
            (PWDs) by providing them with a secure and convenient way to
            authenticate their PWD ID cards. The system also provides employers
            with a way to verify the authenticity of PWD ID cards, which can
            help them to hire PWDs more easily.
          </p>
          <span className="w-3/4">
            <Button
              radius="sm"
              as={Link}
              className="bg-orange-500 text-white font-bold px-8 py-2 "
            >
              Contact Us
            </Button>
          </span>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <img
            src="/wheelchair_lady.png"
            alt="wheelchair_lady"
            className="w-[500px]  z-10"
          />
        </div>
        <ShapeDivider />
        <div className="w-full flex items-center justify-center gap-4 absolute -bottom-20 left-0 z-50">
          <div className="w-[300px] h-[200px] shadow-2xl bg-white" />
          <div className="w-[300px] h-[200px] shadow-2xl bg-white" />
          <div className="w-[300px] h-[200px] shadow-2xl bg-white" />
        </div>
      </div>
      <div className=" w-full h-screen flex items-center justify-center bg-white z-50"></div>
    </div>
  );
};
export default userhome;
