"use client";

import { useEffect, useState } from "react";
import { supabase } from "../Supabase/config";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Filter from "../components/Filter";
import Link from "next/link";
import Loader from "./Loader";

const Card = () => {
  const [furnitures, setFurnitures] = useState([]);
  const [furnitureError, setFurnituresError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [ratingsData, setRatingsData] = useState({});
  const [filters, setFilters] = useState({
    category: [],
    price: { min: 0, max: 100000 },
    material: [],
  });
  const itemsPerPage = 8;

  const fetchData = async (filters) => {
    let query = supabase.from("Furnitures").select("*");

    if (filters.category.length > 0) {
      query = query.in("Category", filters.category);
    }

    if (filters.price) {
      query = query
        .gte("Price", filters.price.min)
        .lte("Price", filters.price.max);
    }

    if (filters.material.length > 0) {
      query = query.in("Material", filters.material);
    }

    const { data, error } = await query;

    if (error) {
      setFurnitures([]);
      setFurnituresError(error.message);
    } else {
      setFurnitures(data);
      setFurnituresError(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const { data: ratingsData, error: ratingsError } = await supabase
          .from("RatingAndReview")
          .select("*");

        if (ratingsError) {
          console.error("Couldn't fetch the ratings data!");
          return;
        }

        const ratingsMap = ratingsData.reduce((acc, rating) => {
          const id = rating.FurnitureId;
          if (!acc[id]) {
            acc[id] = [];
          }
          acc[id].push(rating.Rating);
          return acc;
        }, {});

        setRatingsData(ratingsMap);
      } catch (err) {
        console.error("Error fetching ratings data:", err.message);
      }
    };
    fetchRatings();
    fetchData(filters);
  }, [filters]);

  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;
    const totalRating = ratings.reduce((acc, rating) => acc + rating, 0);
    return totalRating / ratings.length;
  };

  if (furnitureError) {
    return (
      <div className="bg-red-500 text-white p-4 w-full">
        Error: {furnitureError}
      </div>
    );
  }

  if (loading) {
    return <Loader />;
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage * itemsPerPage < furnitures.length ? prevPage + 1 : prevPage
    );
    window.scrollTo(0, 0);
  };

  const startPage = (currentPage - 1) * itemsPerPage;
  const currentItems = furnitures.slice(startPage, startPage + itemsPerPage);

  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <Filter selectedFilters={filters} onFilterChange={setFilters} />
        {currentItems.map((furniture) => {
          const ratings = ratingsData[furniture.id] || [];
          const averageRating = calculateAverageRating(ratings);

          return (
            <Link key={furniture.id} href={`/FurnitureDetail/${furniture.id}`}>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={furniture.Image}
                  alt="Furniture Item"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-josefin">
                    {furniture.Name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <StarIcon
                          key={index}
                          className={`w-5 h-5 ${
                            index < Math.round(averageRating)
                              ? "fill-yellow-500"
                              : "fill-gray-300 dark:fill-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400">
                      {averageRating.toFixed(1)} ({ratings.length} reviews)
                    </span>
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
          );
        })}
      </div>
      <div className="flex justify-between mt-8">
        <button
          className="px-4 py-2 mx-2 text-white bg-blue-600 rounded shadow-lg shadow-white disabled:bg-gray-300"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-2 text-white bg-blue-600 rounded disabled:bg-gray-300"
          onClick={handleNextPage}
          disabled={currentPage * itemsPerPage >= furnitures.length}
        >
          Next
        </button>
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
