"use client";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { ref, get, orderByChild, equalTo } from "firebase/database";
import { useRouter } from "next/navigation";
import { signOut as firebaseSignOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Button} from "../components/ui/button";
const Profile = () => {
  const { user: currentUser } = UserAuth();
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        try {
          // Fetch user data from Realtime Database
          const dbRef = ref(db, `users/${currentUser.uid}`);
          const snapshot = await get(dbRef);

          if (snapshot.exists()) {
            setUserData(snapshot.val());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [currentUser]);

  //   const handleSignOut = () => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You will be logged out ⇤",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonText: "Yes, log out",
  //       cancelButtonText: "Cancel",
  //     }).then(async (result) => {
  //       if (result.isConfirmed) {
  //         try {
  //           await firebaseSignOut(auth);
  //           console.log("Sign out successful.");
  //           router.push("/");
  //           toast.success("Sucessfully Logout");
  //         } catch (error) {
  //           console.error("Error signing out:", error);
  //           setError(error.message);
  //         }
  //       }
  //     });
  //   };

  return (
    <div className="w-full min-h-screen">
      {userData && (
        <>
          <section className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20 ">
            <div className="container px-4 md:px-6  mx-auto max-w-6xl">
              <div className="max-w-2xl mx-auto text-center space-y-4">
                <h1 className="text-3xl font-bold font-josefin tracking-tight sm:text-4xl md:text-5xl font-great-vibes">
                  Welcome,{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text capitalize">
                    {userData.firstName} {userData.lastName}
                  </span>{" "}
                  !
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                  Explore your profile and manage your account settings.
                </p>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-16 lg:py-20  mx-auto max-w-6xl font-great-vibes lg:text-2xl">
            <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-josefin">First Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 font-josefin capitalize">
                    {userData.firstName}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6 font-josefin">
                  <h3 className="text-lg font-semibold">Last Name</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 capitalize">
                    {userData.lastName}
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="p-6 font-josefin">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">
                    {userData.email}
                  </p>
                </div>
              </div>
              {/* <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-400">
                <div className="p-6 font-josefin text-center">
                    <Button varient="ghost" className="text-center font-semibold font-josefin">Logout</Button>
                </div>
              </div> */}
              
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Profile;
