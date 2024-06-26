"use client";

import Link from "next/link";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function Component() {
  return (
    <header className="bg-background">
      <div className="container flex items-center justify-between h-12 px-4 md:px-6">
        <div className="relative flex-1 max-w-md">
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 pr-4 h-10 rounded-md border border-input bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground"
          >
            <SearchIcon className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
        <div className="flex items-center gap-4" />
      </div>
    </header>
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
