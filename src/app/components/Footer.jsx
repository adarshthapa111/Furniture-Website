"use client"

import Link from "next/link"
import {Input} from "../components/ui/input";
import { Button } from "../components/ui/button"

export default function Component() {
  return (
    <footer className="bg-background text-foreground py-12 md:py-16 lg:py-20">
      <div className="container max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <SofaIcon className="h-8 w-8" />
            <span className="text-xl font-bold font-josefin">Hamro Furniture</span>
          </Link>
          <p className="text-muted-foreground">Crafting high-quality, sustainable furniture for your home.</p>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold font-josefin">Quick Links</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h4 className="text-lg font-semibold font-josefin">Resources</h4>
          <Link href="#" className="hover:underline" prefetch={false}>
            FAQ
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Blog
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Sustainability
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Careers
          </Link>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold font-josefin">Newsletter</h4>
          <p className="text-muted-foreground">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="flex gap-2">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit font-josefin">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container max-w-6xl mt-8 flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; 2024 Furniture Co. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

function SofaIcon(props) {
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
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
  )
}