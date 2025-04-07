import SideBar from "./SideBar";
import { SidebarProvider } from "../../components/ui/sidebar";

const LayoutAdmin = () => {
  return (
    <SidebarProvider>
      <SideBar />
    </SidebarProvider>
  );
};

export default LayoutAdmin;
