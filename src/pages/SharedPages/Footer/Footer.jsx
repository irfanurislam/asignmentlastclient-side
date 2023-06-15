import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mb-2">
      <footer className="footer p-10 bg-[#0b1315] text-white">
        <div>
          <p>
            <span className="text-White text-2xl font-bold">Melody Mentor</span>
            <br />
            <br />
            Providing reliable Music Learning And Courses
          </p>
          
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Helpline</a>
          <a className="link link-hover">Solutions</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
       
        <div>
          <span className="footer-title">Contact Information</span>
          <p className="">
            Address: AuckLand Music Street, Auckland City, FInland
            <br />
            Phone: +1234567890
          </p>
          <div className="flex flex-wrap justify-end mt-2">
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaFacebook className="text-white text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaTwitter className="text-white text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaInstagram className="text-white h-4 w-4 text-xl" />
            </Link>
            <Link to="#" className="btn btn-circle btn-outline ml-2 mb-2 sm:mb-0">
              <FaGoogle className="text-white text-xl" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
