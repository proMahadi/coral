import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";
import Catagoryslider from "../components/shared/CatagorySlider/CatagorySlider";
import CopyRight from "../components/shared/CopyRight/CopyRight";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
        <Catagoryslider />
      </header>

      <main>
        <ScrollRestoration />
        <Outlet />
      </main>

      <footer>
        <Footer />
        <CopyRight />
      </footer>
    </>
  );
};

export default RootLayout;
