"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { supabase } from "../Supabase/config"; // Assuming you have supabase initialized here
import Link from "next/link";
import Image from "next/image";
export default function Component() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error, count } = await supabase
          .from("Furnitures")
          .select("*", { count: "exact" })
          .order("created_at", { ascending: false })
          .range(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage - 1
          );

        if (data) {
          setLatestProducts(data);
          setFetchError(null);
          setTotalPages(Math.ceil(count / itemsPerPage)); // Set total pages based on count
        }
        if (error) {
          setLatestProducts([]);
          setFetchError(error.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setFetchError("Error fetching data");
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold font-josefin">Latest Products</h2>
        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        {latestProducts.map((furniture) => (
          <div
            key={furniture.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out border border-gray-200"
          >
            <Link
              href={`/furniture/${furniture.id}`}
              className="absolute inset-0 z-10"
              prefetch={false}
            >
              <span className="sr-only">View Product</span>
            </Link>
            <Image
              src={furniture.Image || "/placeholder.svg"}
              alt={furniture.Name}
              width={500}
              height={600}
              className="aspect-square h-64 w-full object-cover group-hover:opacity-50 transition-opacity"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{furniture.Name}</h3>
              <p className="text-muted-foreground line-clamp-2 text-justify">
                {furniture.Description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold">Rs.{furniture.Price}</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant={index + 1 === currentPage ? "primary" : "outline"}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
}

function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
