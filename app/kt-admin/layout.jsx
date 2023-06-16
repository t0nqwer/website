import Menu from "@components/Menu";
import SideBar from "@components/SideBar";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full h-screen overflow-y-scroll p-10">{children}</div>
    </div>
  );
};
export default layout;
