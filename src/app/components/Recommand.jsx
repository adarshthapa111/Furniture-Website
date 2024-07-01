"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "../Supabase/config";

const Recommand = ({ currentItemId }) => {
  const [recFurnitures, setRecFurnitures] = useState([]);
  const [fetchError, setFetchError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Received currentItemId:", currentItemId);

    if (isNaN(currentItemId) || currentItemId === null) {
      setFetchError("Invalid current item ID");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabase.from("Furnitures").select("*");
      if (error) {
        console.error("Error fetching data:", error);
        setFetchError(error.message);
        setRecFurnitures([]);
        setLoading(false);
        return;
      }

      if (data) {
        console.log("Fetched data:", data);

        // Assign dummy keywords for testing purposes
        data.forEach(item => {
          item.keywords = item.keywords || "default keywords";
        });

        const currentItem = data.find(
          (item) => item.id === parseInt(currentItemId, 10)
        );
        console.log("Current item:", currentItem);

        if (!currentItem) {
          console.error("Current item not found in data:", data);
          setFetchError("Current item not found");
          setRecFurnitures([]);
        } else {
          const recommendations = getRecommendations(currentItem, data);
          console.log("Recommendations:", recommendations);
          setRecFurnitures(recommendations);
          setFetchError(null);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [currentItemId]);

  const getRecommendations = (currentItem, allItems) => {
    const currentKeywords = currentItem.keywords ? currentItem.keywords.split(" ") : [];
    console.log("Current item keywords:", currentKeywords);

    const scores = allItems.map((item) => {
      if (item.id === currentItem.id) return { item, score: 0 };
      const itemKeywords = item.keywords ? item.keywords.split(" ") : [];
      console.log(`Item ${item.id} keywords:`, itemKeywords);

      const sharedKeywords = currentKeywords.filter((keyword) =>
        itemKeywords.includes(keyword)
      );
      console.log(`Item ${item.id} shared keywords:`, sharedKeywords);

      return { item, score: sharedKeywords.length };
    });

    scores.sort((a, b) => b.score - a.score);
    return scores.filter((score) => score.score > 0).map((score) => score.item);
  };
  

  return (
    <div>
      <section className="max-w-6xl px-4 mx-auto py-12 lg:py-20">
        <h2 className="text-2xl sm:text-4xl font-bold mb-8 font-josefin">
          You May Also Like
        </h2>
        {loading && <p>Loading recommendations...</p>}
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {recFurnitures.map((furniture) => (
            <div
              key={furniture.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out"
            >
              <Link
                href={`/furniture/${furniture.id}`}
                className="absolute inset-0 z-10"
                prefetch={false}
              >
                <span className="sr-only">View Product</span>
              </Link>
              <img
                src={furniture.Image || "/placeholder.svg"}
                alt={furniture.Name}
                width={400}
                height={400}
                className="aspect-square object-cover w-full group-hover:opacity-50 transition-opacity"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{furniture.Name}</h3>
                <p className="text-muted-foreground line-clamp-2 text-justify">{furniture.Description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold">Rs.{furniture.Price}</span>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recommand;
