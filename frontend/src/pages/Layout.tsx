import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <div className="pb-14">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
