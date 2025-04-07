import { Link } from "react-router-dom";
import { SidebarTrigger } from "../../components/ui/sidebar";

const Navbar = () => {
  return (
    <nav className="w-full bg-red-500 shadow-md z-40">
      <div className="flex p-4">
        <SidebarTrigger />
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-hijau-tua flex items-center gap-2 ml-auto"
        >
          <img src="/images/logo1.png" alt="logo" className="w-9 h-9" />
          Library
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
