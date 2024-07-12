"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/app/Supabase/config";

export default function Bedroom() {
  const [office, setOffice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Furnitures") // replace with your actual table name
        .select("*")
        .eq("Category", "chair");

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setOffice(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 px-4 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl md:text-3xl font-josefin font-medium py-4">
          All Office equipment ⚡︎
        </h1>
        <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {office.map((room) => (
            <div key={room.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
              <Link
                href={`/FurnitureDetail/${room.id}`}
                className="block"
              >
                <Image
                  src={room.Image}
                  alt="Project 1"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-all duration-300 group-hover:from-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{room.Name}</h3>
                  <p className="text-sm line-clamp-2">{room.Description}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>
      </main>
      <footer className="bg-muted py-6 px-6 text-center text-muted-foreground">
        <p>&copy; 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
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
