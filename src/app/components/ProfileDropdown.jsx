"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"; // Ensure this path is correct
import Image from "next/image";
import Link from "next/link"; // Correct import from next/link

const ProfileDropdown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="/img/iuser.png"
            className="h-7 w-7"
            height={40} // Updated to match your earlier height
            width={40}  // Updated to match your earlier width
            alt="User"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/Profile" passHref>
            <DropdownMenuItem as="a">Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileDropdown;
