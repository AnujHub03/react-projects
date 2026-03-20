import React from "react";
import { NavLink } from "react-router";
import { FaLinkedin } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Let's talk about
          </h2>
          <p className="text-sm leading-relaxed">
            This website showcases a collection of React projects ranging from
            easy to advanced level. Each project demonstrates different concepts
            such as state management, API integration, routing, and Redux cart
            creating.
          </p>
        </div>

        {/* Projects */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Main Projects
          </h2>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">
              <NavLink to="/Project6">Scroll Indicator </NavLink>{" "}
            </li>
            <li className="hover:text-white cursor-pointer">
              <NavLink to="/Project9"> Tic Tac Toe </NavLink>
            </li>
            <li className="hover:text-white cursor-pointer">
              <NavLink to="/Navigation"> Food Recipe App </NavLink>
            </li>
            <li className="hover:text-white cursor-pointer">
              {" "}
              <NavLink to="/Navigationbar">React Redux App </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Have a Question?
          </h2>
          <p className="text-sm p-1">Connect through different platforms</p>
          <p className="text-sm p-1">Email: hoodaanuj03@gmail.com</p>
          <p className="text-sm p-1">Phone: +91 98XXX XXX76</p>
        </div>

        {/* Optional: Add Social Links or Extra Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Follow Me</h2>
          <ul className="space-y-3">
            <li className="hover:text-white cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/anuj-hooda-544135351"
                className="flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AnujHub03"
                className="flex items-center gap-2"
              >
                <VscGithub /> GitHub
              </a>
            </li>

            <li className="hover:text-white cursor-pointer">
              <a className="flex items-center gap-2" href="#">
                <FaXTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 text-center py-6 text-sm">
        <p>
          © 2026 All rights reserved | This template is made with ❤️ by
          <span className="text-white font-medium"> Anuj Hooda</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
