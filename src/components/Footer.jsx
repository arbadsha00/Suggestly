import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo-w.png";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-primary text-white  p-10">
      <aside>
        <img src={logo} alt="" />
        <p className="font-bold text-xl">Suggestly</p>
        <p className="font-bold">Get The Best Products</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaSquareXTwitter />
          </a>
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaFacebookSquare />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
