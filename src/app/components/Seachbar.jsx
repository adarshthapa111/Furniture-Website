"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { Input } from "../components/ui/input";
import { supabase } from "../Supabase/config"; // Adjust the import path based on your project structure
import Image from "next/image";

export default function Searchbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        let { data, error } = await supabase
          .from("Furnitures")
          .select("*")
          .ilike("Name", `%${searchQuery}%`);

        if (error) throw error;

        setSearchResults(data);
      } catch (error) {
        setError("Error fetching search results");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery.trim()) {
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // Optionally delay blur to allow clicking on the search results
    setTimeout(() => setIsFocused(false), 200);
  };

  const handleResultClick = (id) => {
    router.push(`/FurnitureDetail/${id}`);
  };

  return (
    <div className="hidden lg:flex flex-col items-center gap-4 w-full max-w-md mx-auto relative">
      <div className="searchbar w-full">
        <Input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full rounded-sm px-4 py-2 border-gray-400 border shadow-sm"
        />
        <SearchIcon className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-muted-foreground" />
      </div>
      {isFocused && (
        <div className="absolute top-full mt-2 w-full bg-background border border-muted rounded-md shadow-sm overflow-hidden z-10">
          <div className="py-2 px-4 border-b border-muted">
            <h3 className="text-sm font-medium">Search Results</h3>
          </div>
          <div className="max-h-[300px] overflow-auto">
            {loading ? (
              <div className="px-4 py-3 text-muted-foreground">Loading...</div>
            ) : error ? (
              <div className="px-4 py-3 text-red-500">{error}</div>
            ) : (
              <ul className="divide-y divide-muted">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer"
                      onMouseDown={() => handleResultClick(result.id)}
                    >
                      <div className="flex items-center gap-2">
                        <Image src={result.Image} height={60} width={60} className="rounded-sm border border-gray-400 h-14 object-cover" alt={result.Name} />
                        <span className="text-xl font-medium font-josefin">{result.Name}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-3 text-muted-foreground">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}
