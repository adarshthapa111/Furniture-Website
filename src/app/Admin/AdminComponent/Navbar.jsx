"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="">
      <aside className="sticky top-0 h-screen w-56 bg-slate-50 text-gray-800 py-4 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <Link href="#" className="flex items-center gap-3">
            <SofaIcon className="h-6 w-6" />
            <span className="text-lg font-bold font-josefin">
              Hamro Furniture
            </span>
          </Link>
        </div>
        <nav className="gap-y-4">
          <Link href="/Admin">
            <button
              className={
                pathname === "/Admin"
                  ? "w-full flex items-center space-x-2 bg-gray-800 py-2 px-2 rounded-lg text-gray-50"
                  : "w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
              }
            >
              <HomeIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </button>
          </Link>
          <Link href="/Admin/Furnitures">
            <button
              className={
                pathname === "/Admin/Furnitures"
                  ? "w-full flex items-center space-x-2 bg-gray-800 py-2 px-2 rounded-lg text-gray-50"
                  : "w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
              }
            >
              <UsersIcon className="w-4 h-4" />
              <span className="text-sm font-medium">All Furnitures</span>
            </button>
          </Link>
          <Link href="/Admin/AddFurniture">
            <button
              className={
                pathname === "/Admin/AddFurniture"
                  ? "w-full flex items-center space-x-2 bg-gray-800  py-2 px-2 rounded-lg text-gray-50"
                  : "w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
              }
            >
              <WalletIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Add Furniture</span>
            </button>
          </Link>
          <Link href="/Admin/Orders">
            <button
              className={
                pathname === "/Admin/Orders"
                  ? "w-full flex items-center space-x-2 bg-gray-800 py-2 px-2 rounded-lg text-gray-50"
                  : "w-full flex items-center space-x-2 hover:bg-gray-200 py-2 px-2 rounded-lg text-gray-500"
              }
            >
              <TicketIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Orders</span>
            </button>
          </Link>
          <Link href="/Logout">
            <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
              <TicketIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </Link>
        </nav>
      </aside>
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

function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  );
}

export default Navbar;
