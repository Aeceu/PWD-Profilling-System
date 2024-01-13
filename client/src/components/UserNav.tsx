import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const UserNav = () => {
  return (
    <nav className="w-full bg-black text-white h-[60px] flex items-center justify-between px-4">
      <span className="flex items-center gap-2">
        <PhoneIcon className="w-4 text-orange-500" />
        <p>Call : +63 123455678990</p>
      </span>
      <span className="flex items-center gap-2">
        <EnvelopeIcon className="w-4 text-orange-500" />
        <p>Email : The_Empowering_PWDs@gmail.com</p>
      </span>
    </nav>
  );
};
export default UserNav;
