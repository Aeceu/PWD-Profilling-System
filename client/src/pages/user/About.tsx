import SlideLeftRight from "@/components/animations/SlideLeftRight";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="overflow-hidden w-full h-full flex items-center justify-center gap-2 px-8 py-16">
        <img
          src="/professional-img.png"
          alt="professional-img"
          className="w-[500px] h-full"
        />
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-2">
          <SlideLeftRight
            direction="right"
            duration={1.1}
            className="w-full text-blue-700 text-4xl font-bold"
          >
            WE PROVIDE PROFESSIONAL HOME SERVICES.
          </SlideLeftRight>
          <SlideLeftRight
            direction="right"
            duration={1.2}
            className="text-justify"
          >
            randomised words which don't look even slightly believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All
            randomised words which don't look even slightly
          </SlideLeftRight>
          <SlideLeftRight
            direction="right"
            duration={1.3}
            className="w-full mt-8"
          >
            <Button
              to="/"
              as={Link}
              radius="none"
              size="lg"
              className="bg-orange-500 text-white px-12 py-2 font-bold"
            >
              READ MORE
            </Button>
          </SlideLeftRight>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-around gap-16 p-16 bg-[#0a0f43]">
        <h1 className="text-white font-bold text-3xl">GET IN TOUCH</h1>

        <div className="relative w-3/4 flex items-center justify-center">
          <div className="w-3/4 h-[1px] border-b border-white absolute top-10" />

          <div className=" w-full flex flex-col items-center text-white font-bold gap-4">
            <div className="z-10 p-7 hover:bg-orange-500  bg-blue-700 rounded-full flex flex-col items-center  justify-center">
              <MapPinIcon className="w-6 " />
            </div>
            <h1>Our Location</h1>
          </div>
          <div className="w-full flex flex-col items-center text-white font-bold gap-4">
            <div className="z-10 p-7 hover:bg-orange-500  bg-blue-700 rounded-full flex flex-col items-center  justify-center">
              <PhoneIcon className="w-6 " />
            </div>
            <h1>Our Phone Number</h1>
          </div>
          <div className="w-full flex flex-col items-center text-white font-bold gap-4">
            <div className="z-10 p-7 hover:bg-orange-500  bg-blue-700 rounded-full flex flex-col items-center  justify-center">
              <EnvelopeIcon className="w-6 " />
            </div>
            <h1>Our Email Address</h1>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-white font-bold text-2xl text-center">
            FOLLOW US
          </h1>
          <div className="flex items-center justify-center gap-4">
            <img src="/facebook.svg" alt="facebook" />
            <img src="/github.svg" alt="github" />
            <img src="/youtube.svg" alt="youtube" />
            <img src="/twitter.svg" alt="twitter" />
          </div>
        </div>

        <div className="w-11/12 border-b border-white h-[1px]" />
        <p className="text-white font-semibold text-sm">
          © 2024 All Rights Reserved By The Empowering PWDs
        </p>
      </div>
    </div>
  );
};
export default About;
