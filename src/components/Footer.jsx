import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white px-10 py-16">
      <footer className="footer sm:footer-horizontal ">
        <aside>
          <h3 className="text-2xl font-bold">DigiTools</h3>
          <p className="text-base opacity-80 leading-6">
            Premium digital tools for creators, <br /> professionals, and
            businesses. <br />
            Work smarter with our suite of powerful tools.
          </p>
        </aside>
        <nav className="opacity-80">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Templates</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="opacity-80">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press</a>
        </nav>
        <nav className="opacity-80">
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover">Documentation</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Community</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="opacity-80">
          <h6 className="footer-title">Social Links</h6>
          <div className="flex items-center gap-2">
            <FaFacebook className="w-5 h-5 hover:scale-105  transition-all duration-200 cursor-pointer" />
            <FaInstagram className="w-5 h-5 hover:scale-105  transition-all duration-200" />
            <BsTwitterX className="w-5 h-5 hover:scale-105  transition-all duration-200" />
          </div>
        </nav>
      </footer>
      <div className=" pt-10">
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80 gap-4">
          <p>© {new Date().getFullYear()} DigiTools. All rights reserved.</p>
          <div className="flex gap-4">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms of Condition</p>
            <p className="cursor-pointer hover:underline">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
