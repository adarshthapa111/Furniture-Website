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
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // Import useRouter from next/router
import { toast } from "react-toastify"; // Import toast from react-toastify
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../firebase"; // Import auth from your firebase setup

const ProfileDropdown = () => {
  const router = useRouter(); // Initialize useRouter
  const [error, setError] = React.useState(null); // State for error handling

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out ⇤",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await firebaseSignOut(auth);
          console.log("Sign out successful.");
          router.push("/");
          toast.success("Successfully Logged out");
        } catch (error) {
          console.error("Error signing out:", error);
          setError(error.message);
        }
      }
    });
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Image
            src="/img/iuser.png"
            className="h-7 w-7"
            height={40}
            width={40}
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
          <DropdownMenuItem onClick={handleSignOut}>Logout</DropdownMenuItem> {/* Corrected onClick */}
        </DropdownMenuContent>
      </DropdownMenu>
      {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
    </div>
  );
};

export default ProfileDropdown;
