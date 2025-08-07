import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <div className="pt-[43px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
