import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <HelmetProvider>
        <Nav></Nav>
        <div className="min-h-[calc(100vh-380px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <ToastContainer />
      </HelmetProvider>
    </div>
  );
};

export default MainLayout;
