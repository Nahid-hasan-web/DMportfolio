'use client'
import React, { useState } from "react";
import Link from "next/link";
import ButtonV1 from "../common-components/ButtonV1";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navbaritems = [
    {
      navbarContent: "Home",
      navbarLink: "/",
    },
    {
      navbarContent: "About",
      navbarLink: "/",
    },
    {
      navbarContent: "Process",
      navbarLink: "/",
    },
    {
      navbarContent: "Portfolio",
      navbarLink: "/",
    },
    {
      navbarContent: "Blog",
      navbarLink: "/",
    },
    {
      navbarContent: "Services",
      navbarLink: "/",
    },
  ];
  const menuClasses = `text-base font-medium items-center md:flex md:gap-12 md:static md:flex-row md:w-auto ${
    open
      ? "flex flex-col gap-4 absolute left-0 top-full w-full bg-white p-4"
      : "hidden"
  }`;

  return (
    <>
      <nav className="py-5 px-1 lg:px-0">
        <div className="container">
          <div className="navRow flex items-center justify-between relative">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>

            {/* Hamburger - visible on small screens */}
            <button
              className="md:hidden p-2"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>

            <ul className={menuClasses}>
              {navbaritems.map((item, i) => (
                <li key={i} onClick={() => setOpen(false)}>
                  <Link href={item.navbarLink} className="text-[#333333] block">
                    {item.navbarContent}
                  </Link>
                </li>
              ))}
              <div onClick={() => setOpen(false)}>
                <ButtonV1 buttonContent={'Contact'}/>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
