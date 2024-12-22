import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  return (
    <div>
      <HelmetProvider>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </HelmetProvider>
    </div>
  );
};

export default MainLayout;
