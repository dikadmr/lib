import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children?: ReactNode; // Jadikan opsional agar tidak wajib
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 container mx-auto p-4">
        {children || <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
