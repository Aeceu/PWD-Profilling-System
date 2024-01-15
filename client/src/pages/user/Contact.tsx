import {
  EnvelopeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";
import { Input, Textarea, Button } from "@nextui-org/react";
import { UserIcon, PhoneIcon, MapPinIcon } from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Contact */}
      <div className="w-full h-full p-20 grid grid-cols-2 place-items-center gap-4">
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
export default Contact;
