import { Button, Input, Textarea } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Slideup from "../../components/animations/Slideup";
import SlideLeftRight from "../../components/animations/SlideLeftRight";
import {
  ArrowLongRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/20/solid";
import ShapeDivider from "../../components/ShapeDivider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";
import useScrollTo from "@/hooks/useScrollTo";

const Userhome = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const scrollTo = useScrollTo();

  const clients = [
    {
      name: "Jorch Morik",
      link: "/client-1.jpg",
      alt: "client-1",
      stars: 5,
      comment:
        " I love this website so much! It makes my life better and easier!",
    },
    {
      name: "Jorch Morik",
      link: "/client-2.jpg",
      alt: "client-2",
      stars: 5,
      comment:
        " I love this website so much! It makes my life better and easier!",
    },
    {
      name: "Jorch Morik",
      link: "/client-1.jpg",
      alt: "client-1",
      stars: 5,
      comment:
        " I love this website so much! It makes my life better and easier!",
    },
    {
      name: "Jorch Morik",
      link: "/client-2.jpg",
      alt: "client-2",
      stars: 5,
      comment:
        " I love this website so much! It makes my life better and easier!",
    },
    {
      name: "Jorch Morik",
      link: "/client-1.jpg",
      alt: "client-1",
      stars: 5,
      comment:
        " I love this website so much! It makes my life better and easier!",
    },
  ];

  return (
    <div className=" w-full h-full ">
      {/* Home page */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-4">
          <SlideLeftRight
            direction="left"
            duration={0.5}
            className="w-3/4 text-blue-600 font-bold text-5xl"
          >
            Identification for Inclusive Employment system
          </SlideLeftRight>
          <SlideLeftRight
            direction="left"
            duration={0.75}
            className="text-sm w-3/4"
          >
            is a web-based system that aims to empower persons with disabilities
            (PWDs) by providing them with a secure and convenient way to
            authenticate their PWD ID cards. The system also provides employers
            with a way to verify the authenticity of PWD ID cards, which can
            help them to hire PWDs more easily.
          </SlideLeftRight>
          <span className="w-3/4">
            <Button
              onClick={() => scrollTo({ ref: contactRef })}
              radius="sm"
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
            className="w-[500px] h-full  z-10"
          />
        </div>
        <div className="absolute -bottom-24 flex items-center justify-end gap-4 z-50">
          <Slideup duration={0.5}>
            <Link
              to="/"
              className="w-[300px] h-[200px] shadow-xl bg-white  hover:bg-orange-500 hover:text-white flex flex-col items-center justify-center gap-2"
            >
              <img
                src="/tools.svg"
                alt="tools"
                className="w-20 text-violet-500"
              />
              <h1 className="text-blue-600 font-semibold text-xl">
                PWD ID MATCHING
              </h1>
            </Link>
          </Slideup>
          <Slideup duration={0.7}>
            <Link
              to="/"
              className="w-[300px] h-[200px] shadow-xl bg-white  hover:bg-orange-500 hover:text-white flex flex-col items-center justify-center gap-2"
            >
              <img
                src="/construction.svg"
                alt="construction"
                className="w-20 text-violet-500"
              />
              <h1 className="text-blue-600 font-semibold text-xl">
                PWD ID MATCHING
              </h1>
            </Link>
          </Slideup>
          <Slideup duration={0.9}>
            <Link
              to="/"
              className="w-[300px] h-[200px] shadow-xl bg-white  hover:bg-orange-500 hover:text-white flex flex-col items-center justify-center gap-2"
            >
              <img
                src="/maintenance.svg"
                alt="maintenance"
                className="w-20 text-violet-500"
              />
              <h1 className="text-blue-600 font-semibold text-xl">
                PWD ID MATCHING
              </h1>
            </Link>
          </Slideup>
        </div>
      </div>

      {/* What is empowering pwds */}
      <div className=" w-full h-[calc(100vh+100px)] flex items-center justify-center bg-white z-50">
        <div className="w-3/4 flex flex-col items-center justify-center gap-2">
          <strong className="w-3/4 text-4xl text-blue-600">
            WHAT IS EMPOWERING PWDS?
          </strong>
          <p className="w-3/4 text-justify">
            The Empowering PWDs: Identification for Inclusive Employment system
            is a valuable tool for both PWDs and employers. For PWDs, the system
            provides a secure and convenient way to authenticate their PWD ID
            cards. This can help them to access services and benefits that are
            specifically designed for PWDs. For employers, the system makes it
            easier to hire PWDs by providing a way to verify the authenticity of
            PWD ID cards. This can help employers to save time and money on the
            hiring process.
          </p>
        </div>
        <div className="w-3/4 flex items-center justify-center">
          <img src="/about-img.jpg" alt="about-img" className="w-[600px]" />
        </div>
      </div>

      {/* Provide professional home service */}
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
              onClick={() => scrollTo({ ref: serviceRef })}
              radius="none"
              size="lg"
              className="bg-orange-500 text-white px-12 py-2 font-bold"
            >
              READ MORE
            </Button>
          </SlideLeftRight>
        </div>
      </div>

      {/*  Services */}
      <div
        ref={serviceRef}
        className="overflow-hidden relative bg-white w-full h-screen flex flex-col items-center justify-evenly"
      >
        <ShapeDivider />
        <h1 className="font-bold text-4xl z-50">OUR SERVICES</h1>
        <div className="w-full flex items-center justify-evenly gap-4 z-50">
          <div className=" shadow-2xl w-[300px] h-[320px]  flex flex-col">
            <img
              src="/job_interview.jpg"
              alt="job_interview"
              className="w-full h-[200px] object-fill object-center rounded-t-md"
            />
            <div className="w-full h-[120px] bg-slate-900  rounded-b-lg p-3 flex flex-col gap-2 ">
              <h1 className="text-xs text-slate-300">
                PWD Matching and Job Board Service
              </h1>
              <p className="text-[10px] leading-3 text-justify text-slate-400">
                Ensures authenticity by cross-referencing PWD ID cards with
                government records, preventing fraud and ensuring system
                integrity.
              </p>
              <Link
                to="/"
                className="w-max mt-2 text-slate-300  text-xs flex items-center gap-1 underline underline-offset-4 hover:text-blue-600 hover:scale-105 transition-all duration-200"
              >
                Find out more <ArrowLongRightIcon className="w-4" />
              </Link>
            </div>
          </div>

          <div className=" shadow-2xl w-[300px] h-[320px]  flex flex-col">
            <img
              src="/person_id.jpg"
              alt="person_id"
              className="w-full h-[200px] object-fill object-center rounded-t-md"
            />
            <div className="w-full h-[120px] bg-slate-900  rounded-b-lg p-3 flex flex-col gap-2 ">
              <h1 className="text-xs text-slate-300">
                PWD ID Authentication Service
              </h1>
              <p className="text-[10px] leading-3 text-justify text-slate-400">
                Provides PWDs with a secure and convenient method to
                authenticate their ID cards, granting them access to tailored
                services and benefits designed for their specific needs.
              </p>
              <Link
                to="/"
                className="w-max py-2 text-slate-300  text-xs flex items-center gap-1 underline underline-offset-4 hover:text-blue-600 hover:scale-105 transition-all duration-200"
              >
                Find out more <ArrowLongRightIcon className="w-4" />
              </Link>
            </div>
          </div>

          <div className=" shadow-2xl w-[300px] h-[320px]  flex flex-col">
            <img
              src="/id_scanning.jpg"
              alt="id_scanning"
              className="w-full h-[200px] object-fill object-center rounded-t-md"
            />
            <div className="w-full h-[120px] bg-slate-900  rounded-b-lg p-3 flex flex-col gap-2 ">
              <h1 className="text-xs text-slate-300">
                PWD ID Verification Service for Employers
              </h1>
              <p className="text-[10px] leading-3 text-justify text-slate-400">
                Simply enter the PWD ID number into the system, which then
                retrieves and displays relevant PWD information from the
                government's database.
              </p>
              <Link
                to="/"
                className="w-max py-2 text-slate-300  text-xs flex items-center gap-1 underline underline-offset-4 hover:text-blue-600 hover:scale-105 transition-all duration-200"
              >
                Find out more <ArrowLongRightIcon className="w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-16 bg-white">
        <h1 className="font-bold text-4xl z-10">WHAT OUR CLIENTS SAY</h1>
        <Carousel
          className="border-x"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="gap-2">
            {clients.map((client, i) => (
              <CarouselItem
                key={i}
                className="p-4 basis-1/2  relative border flex flex-col items-center justify-center"
              >
                <img
                  src="/quote.svg"
                  alt="quote"
                  className="w-24 absolute top-0 right-5 text-slate-300"
                />
                <div className="w-full flex items-center gap-4 p-4">
                  <img
                    src={client.link}
                    alt={client.alt}
                    className="w-[120px] h-[120px] rounded-full"
                  />
                  <div>
                    <h1 className="font-semibold">{client.name}</h1>
                    <span className="flex items-center gap-1">
                      {Array.from({ length: client.stars }).map((_, i) => (
                        <StarIcon key={i} className="w-5 text-yellow-500" />
                      ))}
                    </span>
                  </div>
                </div>
                <h1 className="h-full">
                  I love this website so much! It makes my life better and
                  easier!
                </h1>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Contact */}
      <div
        ref={contactRef}
        className="w-full h-full p-20 grid grid-cols-2 place-items-center gap-4"
      >
        <h1 className="col-span-2 font-bold text-4xl w-full mb-4">
          Contact Us
        </h1>
        <form className="w-full h-full  flex flex-col items-center justify-center gap-4">
          <Input
            radius="sm"
            className="shadow-xl w-full"
            label="Name"
            startContent={<UserIcon className="w-4" />}
          />
          <Input
            radius="sm"
            className="shadow-xl w-full"
            label="Phone Number"
            startContent={<PhoneIcon className="w-4" />}
          />
          <Input
            radius="sm"
            className="shadow-xl w-full"
            label="Email"
            startContent={<EnvelopeIcon className="w-4" />}
          />
          <Input
            radius="sm"
            className="shadow-xl w-full"
            label="Name"
            startContent={<UserIcon className="w-4" />}
          />
          <Textarea
            radius="sm"
            label="Message"
            className="shadow-xl"
            startContent={<ChatBubbleOvalLeftEllipsisIcon className="w-4" />}
          />
          <Button
            type="submit"
            radius="sm"
            className="bg-blue-600 text-white w-full font-bold"
          >
            Send
          </Button>
        </form>
        <div className="w-full  h-full flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d811.7532000454261!2d121.00578237881808!3d14.577939141012388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9bd9c9f0e61%3A0x3dd0e6d6c3c4adaf!2s782%20Barangay%20Hall%20(Manila)!5e0!3m2!1sen!2sph!4v1705245465870!5m2!1sen!2sph"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
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
export default Userhome;
