import { Outlet } from "react-router";
import Nav from "./Nav";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="pt-[43px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
