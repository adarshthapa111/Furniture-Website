"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { UserAuth } from "../context/AuthContext";
import { usePathname } from "next/navigation";
import Searchbar from "../components/Seachbar";
const Navbar = () => {
  const { user } = UserAuth();
  const pathname = usePathname();
  return (
    <div className="shadow-sm border-b border-gray-200">
      <header className="px-4 lg:px-6 h-14 flex items-center rounded-full justify-between max-w-6xl mx-auto">
        <Link href="#" className="flex items-center gap-2">
          <SofaIcon className="h-6 w-6" />
          <span className="text-lg font-bold font-josefin">
            Hamro Furniture
          </span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="/">
            <ul className="text-sm font-medium">
              <li className={pathname === "/" ? "font-bold" : ""}>Home</li>
            </ul>
          </Link>
          <Link href="/Shop">
            <ul className="text-sm font-medium">
              <li className={pathname === "/Shop" ? "font-bold" : ""}>Shop</li>
            </ul>
          </Link>
          <Link href="/AboutUs">
            <ul className="text-sm font-medium">
              <li className={pathname === "/AboutUs" ? "font-bold" : ""}>
                About
              </li>
            </ul>
          </Link>
          <Link href="/ContactUs">
            <ul className="text-sm font-medium">
              <li className={pathname === "/ContactUs" ? "font-bold" : ""}>
                Contact
              </li>
            </ul>
          </Link>
        </nav>
        <div>
          <Searchbar />
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link href="Favourites">
            <Image
              src="/img/ifav.png"
              className="h-7 w-7 "
              height={40}
              width={25}
            />
          </Link>
          <Link href="AddToCart">
            <Image
              src="/img/iaddtocart.png"
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
            <Link href="/Profile">
              <Image
                src="/img/iuser.png"
                className="h-7 w-7 "
                height={40}
                width={25}
              />
            </Link>
          )}
        </div>

        <Button variant="default" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
    </div>
  );
};
function SofaIcon(props) {
  return (
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
}

function MenuIcon(props) {
  return (
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
}

export default Navbar;
