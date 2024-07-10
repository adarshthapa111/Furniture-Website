"use client";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { supabase } from "../Supabase/config"; // Assuming you have supabase initialized here

export default function Component() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 4; // Number of items per page

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {latestProducts.map((product) => (
          <div
            key={product.id}
            className="bg-background border border-gray-300 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={product.Image} // Use the actual image source from your data
              alt={product.Name}
              width={400}
              height={300}
              className="w-full h-[220px] object-cover border-b-2"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 font-josefin">
                {product.Name}
              </h3>
              <h4 className="text-sm line-clamp-2 mb-2 text-justify font-light">
                {product.Description}
              </h4>
              <div className="text-primary font-semibold mb-4">
                Rs.{product.Price}
              </div>
              <Button size="sm" className="w-full">
                Add to cart
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
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
