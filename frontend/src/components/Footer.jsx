import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../css/Footer.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-contanier">
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <h1>Mega Store</h1>
        </div>
        <ul className="footer-links">
          <li>
            <Link to="/contact">Contact</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/aboutUs">About</Link>
          </li>
          <li>
            <Link to="product">Products</Link>
          </li>
        </ul>
        <div className="footer-socials">
          <div className="socials-container">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="socials-icon" />
            </a>
          </div>
          <div className="socials-container">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="socials-icon" />
            </a>
          </div>
          <div className="socials-container">
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="socials-icon" />
            </a>
          </div>
        </div>
        <div className="footer-rights">
          <hr />
          <h1>© 2024 - All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
