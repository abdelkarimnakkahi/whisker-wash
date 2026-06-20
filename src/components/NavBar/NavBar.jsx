import React from "react";
import Logo from "../../assets/images/Logo.png";
import arrowDown from "../../assets/icons/arrow-down.svg";
import arrowTopRight from "../../assets/icons/arrow-top-right.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="container">
        <div className="logo-container">
          <a href="/">
            <img src={Logo} alt="Whisker Wash Logo" />
          </a>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="link-item">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              About
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Services{" "}
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="link-item">
              Product
            </a>
          </li>
          <li>
            <a href="#" className="btn btn-contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
