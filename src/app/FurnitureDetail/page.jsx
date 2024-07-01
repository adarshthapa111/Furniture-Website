"use client";

import Link from "next/link";
import Image from "next/image";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Swal from "sweetalert2";
import { supabase } from "../Supabase/config";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Recommand from "../components/Recommand";

export default function FurnitureDetail() {
  const params = useSearchParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [heigth, setHeight] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [material, setMaterial] = useState("");
  const [id, setID] = useState("");
  const { user: currentUser } = UserAuth();

  useEffect(() => {
    if (params) {
      const image = params.get("Image");
      const name = params.get("Name");
      const description = params.get("Description");
      const length = params.get("Length");
      const width = params.get("Width");
      const height = params.get("Height");
      const category = params.get("Category");
      const id = params.get("ID");
      const price = params.get("Price");
      const material = params.get("Material");

      setImage(image);
      setName(name);
      setPrice(price);
      setWidth(width);
      setLength(length);
      setCategory(category);
      setDescription(description);
      setHeight(height);
      setID(id);
      setMaterial(material);
    }
  }, [params]);

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
              Image: image,
              Name: name,
              description: description,
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
              Image: image,
              Name: name,
              quantity: 1,
              Price: price,
              description: description,
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

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-12 lg:py-20">
          <div className="grid gap-6">
            <InnerImageZoom
              src={image}
              alt="Product Image"
              width={540}
              height={500}
              className="aspect-square object-c rounded-lg border h-96 border-gray-300 shadow-md"
              zoomType="hover"
              zoomScale={1.1}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Image
                src={image}
                alt="Product Image"
                width={300}
                height={300}
                className="aspect-square object-cover rounded-lg"
              />
              <Image
                src={image}
                alt="Product Image"
                width={300}
                height={300}
                className="aspect-square object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="grid gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold font-josefin">
                {name}
              </h1>
              <p className="text-muted-foreground text-lg text-justify">
                {description}
              </p>
            </div>
            <div className="grid gap-4">
              <div>
                <h2 className="text-xl font-semibold font-josefin capitalize">
                  Category: {category}
                </h2>
                {/* <h2 className="text-xl font-semibold font-josefin">Price: Rs.{price}</h2> */}
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Dimensions:</strong> {width}" W x {length}" D x{" "}
                    {heigth}" H
                  </li>
                  <li>
                    <strong>Materials:</strong> {material}
                  </li>
                  <li>
                    <strong>Price:</strong>Rs.{price}
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
                <Link href="/Customization">
                  <Button size="lg" variant="outline">
                    Customize
                  </Button>
                </Link>
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
                  src={image}
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
                  src={image}
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
        {/* <Recommand currentItemId={parseInt(id, 10)}/> */}
        {id && <Recommand currentItemId={id} />}
      </main>
    </div>
  );
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
