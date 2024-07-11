"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { UserAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";
import Searchbar from "../components/Seachbar";
import ProfileDropdown from "../components/ProfileDropdown";
import { disableNavAndFoot } from "./DisableNavAndFoot";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = UserAuth();
  const pathname = usePathname();
  const path = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!disableNavAndFoot.includes(path) && (
        <div className="shadow-sm border-b border-gray-200">
          <header className="px-4 lg:px-6 h-14 flex items-center rounded-full justify-between max-w-6xl mx-auto">
            <Link href="#" className="flex items-center gap-2">
              <SofaIcon className="h-6 w-6" />
              <span className="text-lg font-bold font-josefin">
                Hamro Furniture
              </span>
            </Link>
            <nav className="hidden lg:flex lg:items-center gap-4 sm:gap-6 lg;gap-8">
              <NavItem href="/" currentPath={pathname}>
                Home
              </NavItem>
              <NavItem href="/Shop" currentPath={pathname}>
                Shop
              </NavItem>
              <NavItem href="/AboutUs" currentPath={pathname}>
                About
              </NavItem>
              <NavItem href="/ContactUs" currentPath={pathname}>
                Contact
              </NavItem>
            </nav>
            <div className="hidden lg:flex">
              <Searchbar />
            </div>
            <div className="hidden lg:flex space-x-4">
              <Link href="Favourites">
                <Image
                  src="/img/fav-item.png"
                  className="h-7 w-7 drop-shadow-2xl shadow-gray-800 "
                  height={40}
                  width={25}
                />
              </Link>
              <Link href="AddToCart">
                <Image
                  src="/img/cartitems.png"
                  className="h-7 w-7 "
                  height={40}
                  width={25}
                />
              </Link>
              {!user ? (
                <Link href="/Login">
                  <Button varient="outline">Login</Button>
                </Link>
              ) : (
                <ProfileDropdown />
              )}
            </div>

            <Button
              variant="default"
              size="icon"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </header>
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
      )}
    </>
  );
};

const NavItem = ({ href, currentPath, children }) => (
  <Link href={href}>
    <ul className="text-sm font-medium">
      <li
        className={
          currentPath === href
            ? "bg-gradient-to-t from-slate-400 p-2 via-gray-400 to-slate-400 rounded-lg text-white text-sm"
            : "text-sm p-2"
        }
      >
        {children}
      </li>
    </ul>
  </Link>
);

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: isOpen ? 0 : "-100%" }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="fixed top-0 left-0 w-64 h-full bg-white shadow-md z-50"
  >
    <div className="flex flex-col items-start p-4">
      <button
        onClick={toggleSidebar}
        className="self-end p-2 text-gray-600 focus:outline-none"
      >
        <CloseIcon className="h-6 w-6" />
      </button>
      <nav className="flex flex-col w-full mt-4 p-1 space-y-4">
        <NavItem href="/" currentPath={usePathname()} className="p-2">
          Home
        </NavItem>
        <NavItem href="/Shop" currentPath={usePathname()} className="p-2">
          Shop
        </NavItem>
        <NavItem href="/AboutUs" currentPath={usePathname()} className="p-2">
          About
        </NavItem>
        <NavItem href="/ContactUs" currentPath={usePathname()} className="p-2">
          Contact
        </NavItem>
      </nav>
    </div>
  </motion.div>
);

const SofaIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
    <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
    <path d="M4 18v2" />
    <path d="M20 18v2" />
    <path d="M12 4v9" />
  </svg>
);

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const CloseIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

export default Navbar;


