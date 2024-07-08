"use client";

import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Swal from "sweetalert2";
import { supabase } from "../Supabase/config";
import { UserAuth } from "../context/AuthContext";
import Link from "next/link";

export default function Component() {
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
    <div className="container mx-auto max-w-6xl px-4 md:px-6 grid gap-8 py-6">
      <div className="grid gap-6 rounded-lg p-2">
        <h1 className="text-3xl font-bold tracking-tight font-josefin">
          Your Cart
        </h1>
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        <div className="grid gap-6">
          {furnitures.map((item) => (
            <div
              key={item.id}
              className="grid md:grid-cols-[200px_1fr_auto] gap-6 items-start shadow-lg border border-gray-300 rounded-lg p-4"
            >
              <Image
                src={item.Image}
                alt="Product Image"
                width={200}
                height={200}
                className="rounded-lg object-cover md:h-44 w-full"
              />
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-2xl font-josefin">
                      {item.Name}
                    </h3>
                    <Image
                      src="/img/delete.png"
                      alt="Delete Icon"
                      className="cursor-pointer object-cover"
                      height={30}
                      width={30}
                      onClick={() => handleDelete(item.id)}
                    />
                  </div>
                  <p className="text-muted-foreground text-justify line-clamp-4">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDecreaseQuantity(item.id)}
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleIncreaseQuantity(item.id)}
                  >
                    +
                  </Button>
                  <div className="ml-auto text-2xl font-bold">
                    Rs.{item.Price * item.quantity}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t pt-6 flex items-center justify-between shadow-lg rounded-lg p-4">
        <h2 className="text-2xl font-bold">Total: Rs.{totalPrice}</h2>
        <Link href="/Checkout">
          <Button size="lg">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
