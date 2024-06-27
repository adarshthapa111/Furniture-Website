"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
// import { supabase } from "../Supabase/config"; // Adjust the import path based on your project structure

const FurnitureDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter
  const [furnitureData, setFurnitureData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>{furnitureData.Name}</h1>
      <p>{furnitureData.Description}</p>
      <img src={furnitureData.Image} alt={furnitureData.Name} />
      {/* Render other details as needed */}
    </div>
  );
};

export default FurnitureDetail;
