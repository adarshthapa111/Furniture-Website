"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../Supabase/config";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const { user: currentUser } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("Favourites")
          .select("*")
          .eq("UserId", currentUser.uid);

        if (error) {
          setFetchError(error.message);
        } else {
          setFavourites(data);
        }
      } catch (error) {
        console.log("Error fetching data", error);
        setFetchError("An unexpected error occurred.");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete it",
      text: "You cannot undo it",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Yes Delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { error } = await supabase
            .from("Favourites")
            .delete()
            .eq("id", id);
          if (error) {
            console.log("Error while deleting");
          } else {
            setFavourites(favourites.filter((item) => item.id !== id));
            Swal.fire({
              title: "Sucessfully Deleted",
              text: "User has been deleted sucessfully",
              icon: "success",
              confirmButtonColor: "black",
            });
          }
        } catch (err) {
          console.log("Error Occured", err);
        }
      }
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6 min-h-screen">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center font-josefin">
          My Favorite Furniture
        </h1>
      </header>
      {fetchError && <p className="text-red-500">{fetchError}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {favourites.map((item) => (
          <div
            key={item.id}
            className="bg-background rounded-lg overflow-hidden border border-gray-300 shadow-lg"
          >
            <Image
              src={item.Image || "/placeholder.svg"}
              alt={item.Name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.Name}</h2>
              <p className="text-muted-foreground mb-4 line-clamp-2 text-justify">
                {item.description}
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                prefetch={false}
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
