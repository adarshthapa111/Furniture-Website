"use client";

import Link from "next/link";
import Image from "next/image";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import { Button } from "../../components/ui/button";
import { useParams } from "next/navigation"; // Use useParams instead of useRouter
import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { supabase } from "../../Supabase/config";
import Recommand from "../../components/Recommand";
import RatingAndReview from "../../components/RatingAndReview";

export default function FurnitureDetail() {
  const { id } = useParams(); // Access the dynamic route parameter
  const [furnitureData, setFurnitureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user: currentUser } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from("Furnitures")
          .select("*")
          .eq("id", id)
          .single(); // Fetch a single item based on id

        if (error) throw error;

        setFurnitureData(data);
      } catch (error) {
        setError("Error fetching furniture data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleFavourite = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this to your favourites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const { data: existingData, error: fetchError } = await supabase
          .from("Favourites")
          .select("*")
          .eq("UserId", currentUser.uid)
          .eq("id", id);

        if (existingData.length > 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have already added this item to your favourites!",
          });
        } else {
          const { data, error } = await supabase.from("Favourites").insert([
            {
              id: id,
              UserId: currentUser.uid,
              Image: furnitureData.Image,
              Name: furnitureData.Name,
              description: furnitureData.Description,
            },
          ]);

          if (error) {
            throw error;
          }

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Favourite added successfully!",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error inserting data: " + error.message,
        });
        console.error("Error inserting data:", error);
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Cancelled",
        text: "Your action was cancelled!",
      });
    }
  };

  const handleCart = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to add this to your Cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, add it!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const { data: existingData, error: fetchError } = await supabase
          .from("CartItems")
          .select("*")
          .eq("UserId", currentUser.uid)
          .eq("id", id);

        if (existingData.length > 0) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You have already added this item to your Cart!",
          });
        } else {
          const { data, error } = await supabase.from("CartItems").insert([
            {
              id: id,
              UserId: currentUser.uid,
              Image: furnitureData.Image,
              Name: furnitureData.Name,
              quantity: 1,
              Price: furnitureData.Price,
              description: furnitureData.Description,
            },
          ]);

          if (error) {
            throw error;
          }

          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Item added Sucessfully",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error inserting data: " + error.message,
        });
        console.error("Error inserting data:", error);
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "Cancelled",
        text: "Your action was cancelled!",
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-12 lg:py-20">
          <div className="grid gap-6">
            <Image
              src={furnitureData.Image}
              alt="Product Image"
              width={600}
              height={600}
              className="aspect-square object-contain rounded-lg border border-gray-300 shadow-md"
            />
          </div>
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-josefin">
                {furnitureData.Name}
              </h1>
              <p className="text-muted-foreground text-lg">
                {furnitureData.Description}
              </p>
            </div>
            <div className="grid gap-4">
              <div>
                <h2 className="text-xl font-semibold font-josefin capitalize">
                  Category: {furnitureData.Category}
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Dimensions:</strong> {furnitureData.Width}" W x{" "}
                    {furnitureData.Length}" D x {furnitureData.Height}" H
                  </li>
                  <li>
                    <strong>Materials:</strong> {furnitureData.Material}
                  </li>
                  <li>
                    <strong>Price:</strong>Rs.{furnitureData.Price}
                  </li>
                  <li>
                    <strong>Care:</strong> Spot clean with a damp cloth, avoid
                    direct sunlight
                  </li>
                </ul>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="color" className="text-base">
                  Color
                </Label>
                <RadioGroup
                  id="color"
                  defaultValue="gray"
                  className="flex items-center gap-2"
                >
                  <Label
                    htmlFor="color-gray"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-gray" value="gray" />
                    Gray
                  </Label>
                  <Label
                    htmlFor="color-beige"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-beige" value="beige" />
                    Beige
                  </Label>
                  <Label
                    htmlFor="color-navy"
                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-muted"
                  >
                    <RadioGroupItem id="color-navy" value="navy" />
                    Navy
                  </Label>
                </RadioGroup>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quantity" className="text-base">
                  Quantity
                </Label>
                <Select defaultValue="1">
                  <SelectTrigger className="w-24">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" onClick={handleCart}>
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  Buy Now
                </Button>
                <Button size="lg" onClick={handleFavourite}>
                  Add to Favourite
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 lg:py-20">
          <div className="max-w-6xl px-4 mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-josefin">
              More Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <img
                  src={furnitureData.Image1}
                  alt="Product Detail"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover rounded-lg shadow-md border border-gray-300 cursor-pointer"
                />
                <p className="mt-4 text-muted-foreground">
                  Crafted with premium materials, this sofa features a solid oak
                  frame and durable polyester upholstery.
                </p>
              </div>
              <div>
                <img
                  src={furnitureData.Image2}
                  alt="Product Detail"
                  width={600}
                  height={400}
                  className="aspect-[3/2] object-cover rounded-lg shadow-md border border-gray-300 cursor-pointer"
                />
                <p className="mt-4 text-muted-foreground">
                  The clean, minimalist design of this sofa allows it to
                  seamlessly blend into a variety of interior styles.
                </p>
              </div>
            </div>
          </div>
        </section>
        {id && <Recommand currentItemId={id} />}
      </main>
      {id && <RatingAndReview furnitureId={id} />}
    </div>
  );
}
