"use client";

import { useEffect, useState } from "react";
import { supabase } from "../Supabase/config";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Filter from "../components/Filter";
import Link from "next/link";

const Card = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [furnitureError, setFurnituresError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Furnitures").select("*");

        if (error) {
          setFurnitures([]);
          setFurnituresError(error.message);
        } else {
          setFurnitures(data);
          setFurnituresError(null);
        }
      } catch (err) {
        console.log(err, "Error fetching data!!");
        setFurnituresError("Error fetching data!!");
      }
    };

    fetchData();
  }, []);

  if (furnitureError) {
    return (
      <div className="bg-red-500 text-white p-4 w-full">
        Error: {furnitureError}
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      {/* <div className="grid grid-cols-3 gap-6">
        {furnitures.length > 0 && (
          <Link
          href={{
            pathname: "FurnitureDetail",
            query: {
              ID: furnitures[0].id,
              Image: furnitures[0].Image,
              Name: furnitures[0].Name,
              Description: furnitures[0].Description,
              Price: furnitures[0].Price,
              Length: furnitures[0].Length,
              Width: furnitures[0].Breadth,
              Height: furnitures[0].Height,
              Category: furnitures[0].Category,
              Material: furnitures[0].Material,
            },
          }}
          >
          <div
          className="bg-background rounded-lg shadow-lg overflow-hidden"
          key={furnitures[0].id}
          >
          <Image
          src={furnitures[0].Image}
          alt="Furniture Item"
          width={500}
          height={400}
          className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold font-josefin">
          {furnitures[0].Name}
          </h3>
          <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-primary" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
          </div>
          <span className="text-muted-foreground text-sm">(4.3)</span>
          </div>
          <p
          className="text-muted-foreground text-sm text-justify"
          style={{
            maxHeight: "2.8em",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
          >
          {furnitures[0].Description}
          </p>
          <div className="flex items-center justify-between">
          <span className="text-xl font-bold">
          Rs.{furnitures[0].Price}
          </span>
          <Button variant="outline" size="sm">
          Add to Cart
          </Button>
          </div>
          </div>
          </div>
          </Link>
          )}
        </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <Filter />
        {furnitures.map((furniture) => (
          <Link
            href={{
              pathname: "FurnitureDetail",
              query: {
                ID: furniture.id,
                Image: furniture.Image,
                Name: furniture.Name,
                Description: furniture.Description,
                Price: furniture.Price,
                Length: furniture.Length,
                Width: furniture.Breadth,
                Height: furniture.Height,
                Category: furniture.Category,
                Material: furniture.Material,
              },
            }}
          >
            <div
              className="bg-background rounded-lg shadow-lg overflow-hidden"
              key={furniture.id}
            >
              <Image
                src={furniture.Image}
                alt="Furniture Item"
                width={500}
                height={400}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold font-josefin">
                  {furniture.Name}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground text-sm">(4.3)</span>
                </div>
                <p
                  className="text-muted-foreground text-sm text-justify"
                  style={{
                    maxHeight: "2.8em",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {furniture.Description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold">
                    Rs.{furniture.Price}
                  </span>
                  <Button variant="outline" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Card;
