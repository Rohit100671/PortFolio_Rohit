import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter, instagram } = socialMediaUrl;

  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-dark-card/30 px-2 shadow-md">
      {/* Logo & Hamburger Menu */}
      <div className="flex justify-between items-center py-2">
        <NavLink to="/">
          <img className="w-14" src={logos.logo} alt="logo" />
        </NavLink>
        <div onClick={toggleClass} className="cursor-pointer md:hidden">
          <svg
            className="stroke-dark-heading dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className={`${!isOpen ? "hidden" : ""} text-center md:flex justify-center`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink
              to="/"
              onClick={toggleClass}
              className={({ isActive }) =>
                isActive ? "text-orange-500 text-lg font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink
              to="/about"
              onClick={toggleClass}
              className={({ isActive }) =>
                isActive ? "text-orange-500 text-lg font-semibold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink
              to="/technologies"
              onClick={toggleClass}
              className={({ isActive }) =>
                isActive ? "text-orange-500 text-lg font-semibold" : ""
              }
            >
              Technologies
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink
              to="/projects"
              onClick={toggleClass}
              className={({ isActive }) =>
                isActive ? "text-orange-500 text-lg font-semibold" : ""
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleClass}
              className={({ isActive }) =>
                isActive ? "text-orange-500 text-lg font-semibold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Social Media Icons */}
        <ul className="flex justify-evenly items-center my-5 md:my-0 md:space-x-5 md:mr-5 text-xl">
          <li>
            <a href={twitter} target="_blank" rel="noreferrer noopener">
              <FaTwitter className="text-[#1DA1F2]" />
            </a>
          </li>
          <li>
            <a href={linkdein} target="_blank" rel="noreferrer noopener">
              <FaLinkedin className="text-[#0077B5]" />
            </a>
          </li>
          <li>
            <a href={github} target="_blank" rel="noreferrer noopener">
              <FaGithub className="text-black dark:text-white" />
            </a>
          </li>
          <li>
            <a href={instagram} target="_blank" rel="noreferrer noopener">
              <FaInstagram
                className="text-white w-7 h-7 p-1 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                }}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;