"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { supabase } from "../Supabase/config";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";
import Swal from "sweetalert2";

export default function AddToCart() {
  const [fetchError, setFetchError] = useState(null);
  const [furnitures, setFurnitures] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user: currentUser } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("CartItems")
          .select("*")
          .eq("UserId", currentUser.uid);
        if (error) {
          setFurnitures([]);
          setFetchError(error.message);
        } else {
          setFurnitures(data);
          setFetchError(null);
        }
      } catch (error) {
        console.log("Error fetching data", error);
        setFetchError("An unexpected error occurred.");
      }
    };

    if (currentUser) {
      fetchData();
    }
  }, [currentUser]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = furnitures.reduce((sum, item) => {
        if (item.Price && item.quantity) {
          return sum + item.Price * item.quantity;
        }
        return sum;
      }, 0);
      setTotalPrice(total);
    };
    calculateTotalPrice();
  }, [furnitures]);

  const handleIncreaseQuantity = async (itemId) => {
    try {
      const item = furnitures.find((item) => item.id === itemId);
      const { data, error } = await supabase
        .from("CartItems")
        .update({ quantity: item.quantity + 1 })
        .eq("id", itemId)
        .select();

      if (error) throw error;

      setFurnitures(
        furnitures.map((item) =>
          item.id === itemId ? { ...item, quantity: data[0].quantity } : item
        )
      );
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const handleDecreaseQuantity = async (itemId) => {
    try {
      const item = furnitures.find((item) => item.id === itemId);
      if (item.quantity > 1) {
        const { data, error } = await supabase
          .from("CartItems")
          .update({ quantity: item.quantity - 1 })
          .eq("id", itemId)
          .select();

        if (error) throw error;

        setFurnitures(
          furnitures.map((item) =>
            item.id === itemId ? { ...item, quantity: data[0].quantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to delete it?",
      text: "You cannot undo this action",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "black",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { error } = await supabase
            .from("CartItems")
            .delete()
            .eq("id", id);
          if (error) {
            console.log("Error while deleting");
          } else {
            setFurnitures(furnitures.filter((item) => item.id !== id));
            Swal.fire({
              title: "Successfully Deleted",
              text: "Item has been deleted successfully",
              icon: "success",
              confirmButtonColor: "black",
            });
          }
        } catch (err) {
          console.log("Error Occurred", err);
        }
      }
    });
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-6 max-w-6xl min-h-screen">
      <h1 className="text-2xl font-bold mb-6 font-josefin">
        Cart Items({furnitures.length})
      </h1>
      {fetchError && <p className="text-red-500">{fetchError}</p>}
      <div className="grid gap-6">
        {furnitures.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[100px_1fr_150px_100px] items-center gap-4 border-b pb-4"
          >
            <Image
              src={item.Image}
              alt="Product Image "
              width={200}
              height={150}
              className="object-cover h-24 w-28 cursor-pointer shadow-md border p-1 rounded-sm"
            />
            <div>
              <h3 className="font-semibold font-josefin font-xl xl:text-3xl">
                {item.Name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 ">
                {item.description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                <MinusIcon className="h-4 w-4" />
              </Button>
              <span className="px-2">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                <PlusIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-end space-x-2">
              <div className="text-right font-semibold">
                Rs.{item.Price * item.quantity}
              </div>
              {/* <div> */}
              <Image
                src="/img/idelete.png"
                alt="Delete Icon"
                className="cursor-pointer"
                height={30}
                width={30}
                // onClick={handleDelete(item.id)}
                onClick={() => handleDelete(item.id)}
              />
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold md:text-3xl ">Total</p>
          <p className="text-2xl font-bold">Rs.{totalPrice}</p>
        </div>
        <Link href="/Checkout">
        <Button className="w-full mt-4 p-6">Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

function MinusIcon(props) {
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
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
