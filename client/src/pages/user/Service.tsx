import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="overflow-hidden relative bg-white w-full h-screen flex flex-col items-center justify-evenly">
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
      <div className="w-full h-[70px] flex items-center justify-center bg-[#0a0f43]">
        <p className="text-white font-semibold text-sm">
          © 2024 All Rights Reserved By The Empowering PWDs
        </p>
      </div>
    </div>
  );
};
export default Service;
