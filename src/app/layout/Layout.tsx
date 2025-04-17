import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutProps = {
  children?: ReactNode; // Jadikan opsional agar tidak wajib
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="font-sans">
      <Navbar />
      <div>{children || <Outlet />}</div>
      <Footer />
    </div>
  );
};

export default Layout;
