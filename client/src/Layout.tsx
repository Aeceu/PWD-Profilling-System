import { Link, Outlet, useLocation } from "react-router-dom";
import UserNav from "./components/UserNav";

const Layout = () => {
  const loc = useLocation();

  const links = [
    { url: "/", name: "Home" },
    { url: "/about", name: "About" },
    { url: "/service", name: "Service" },
    { url: "/contact", name: "Contact" },
  ];
  return (
    <div className="w-full h-full flex flex-col">
      <UserNav />
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#d1e3ff]">
        <nav className="w-full h-[70px] flex items-center justify-between px-8">
          <h1 className="text-blue-600 text-2xl font-semibold">
            THE EMPOWERING PWDS
          </h1>
          <span className={`h-full flex items-center `}>
            {links.map((link, i) => (
              <Link
                className={`p-4 ${
                  loc.pathname === link.url && "text-blue-600"
                }`}
                key={i}
                to={link.url}
              >
                {link.name}
              </Link>
            ))}
          </span>
        </nav>
        <div className="w-full h-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Layout;
