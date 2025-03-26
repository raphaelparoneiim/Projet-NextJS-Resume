"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { RiFacebookFill } from "react-icons/ri";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 pt-4">
      <div className="hidden md:flex items-center justify-center px-4 py-2 mx-auto max-w-[600px] bg-black/50 backdrop-blur-sm rounded-lg">
        <ul className="flex flex-row p-2 space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <p className="text-white/80 hover:text-orange-400 transition-colors duration-300 text-base">
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact">
              <p className="text-base text-white/80 cursor-pointer hover:text-orange-400 transition-colors duration-300">
                Contact Me
              </p>
            </a>
          </li>
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="md:hidden fixed top-4 right-4 border rounded text-white/80 border-white/50 p-1.5 z-50 bg-black/50"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <motion.div
        initial={false}
        animate={nav ? "open" : "closed"}
        variants={menuVariants}
        className="fixed left-0 top-0 w-full h-full z-40 bg-black/80"
      >
        <ul className="text-3xl my-20 text-center space-y-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="text-white/80 hover:text-orange-400 transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              onClick={closeNav}
              className="text-white/80 hover:text-orange-400 transition-colors duration-300"
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavBar;
