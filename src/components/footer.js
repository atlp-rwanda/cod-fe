import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { HiOutlineGlobe } from 'react-icons/hi';

const Footer = () => {
  return (
    <section
      className="w-full md:h-[40vh] bg-[#10100e] flex justify-between md:px-40  md:pt-28 md:pb-40 text-white"
      data-testid="page-footer"
      id="page-footer"
    >
      <div className="w-1/2 flex items-center">
        <div className="w-1/2 h-max pr-20 py-10 border-r border-[#fab33f] flex flex-col items-center">
          <p className="text-3xl">
            <span className="text-4xl text-[#FAB33F]">B</span>arefoot
            <span className="text-4xl text-[#FAB33F] ml-3.5">N</span>omad
          </p>
          <li className="w-full h-max flex justify-evenly mt-10">
            <FaFacebookF className="h-[30px] w-[30px] text-[#fab33f] hover:translate-y-[-10px] transition-all duration-500" />
            <FaTwitter className="h-[30px] w-[30px] text-[#fab33f] hover:translate-y-[-10px] transition-all duration-500" />
            <FaLinkedinIn className="h-[30px] w-[30px] text-[#fab33f] hover:translate-y-[-10px] transition-all duration-500" />
          </li>
        </div>
        <div className="w-2/5 h-max flex flex-col items-center">
          <span className="mb-5 text-lg font-light tracking-widest text-[#fab33f]">Company</span>
          <section className="flex flex-col ml-20">
            <span>
              <span className="text-[#fab33f] mr-2">01.</span>
              <a
                className="text-white capitalize text-lg hover:text-[#fab33f] transition-all duration-300"
                href="#home"
              >
                home
              </a>
            </span>
            <span>
              <span className="text-[#fab33f] mr-2">02.</span>
              <a
                className="text-white capitalize text-lg hover:text-[#fab33f] transition-all duration-300"
                href="/services"
              >
                services
              </a>
            </span>
            <span>
              <span className="text-[#fab33f] mr-2">03.</span>
              <a
                className="text-white capitalize text-lg hover:text-[#fab33f] transition-all duration-300"
                href="/contactUs"
              >
                contact us
              </a>
            </span>
          </section>
        </div>
      </div>
      <div className="w-max flex flex-col items-end justify-center">
        <span className="w-full flex items-center">
          <GoLocation className="text-[#fab33f] opacity-40" />
          <span className="ml-3 opacity-40 text-[#fab33f]">
            KK 778 St, Kicukiro, Kigali - Rwanda
          </span>
        </span>
        <span className="w-full flex items-center">
          <FiMail className="text-[#fab33f] opacity-40" />
          <span className="ml-3 opacity-40 text-[#fab33f]">info@bnomad.com</span>
        </span>
        <span className="w-full flex items-center">
          <FiPhone className="text-[#fab33f] opacity-40" />
          <span className="ml-3 opacity-40 text-[#fab33f]">+ (250) 788 300 000</span>
        </span>
        <span className="w-full flex items-center">
          <HiOutlineGlobe className="text-[#fab33f] opacity-40" />
          <a className="ml-3 opacity-40 text-[#fab33f]" href="www.google.com">
            www.barefootnomad.com
          </a>
        </span>
      </div>
    </section>
  );
};

export default Footer;
