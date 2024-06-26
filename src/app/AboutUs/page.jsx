"use client";

import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export default function AboutUs() {
  return (
    <div className="flex flex-col">
      <section className="w-full relative h-[80vh] overflow-hidden">
        {/* <img src="/placeholder.svg" alt="Living Room" fill className="object-cover object-center" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-400 to-gray-200 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-2xl px-4">
            <h1 className="text-4xl sm:text-6xl font-bold text-white font-josefin">
              Crafting Timeless Furniture
            </h1>
            <p className="text-lg sm:text-xl text-white">
              Discover our collection of beautifully designed furniture that
              elevates any space.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary/50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 max-w-6xl mx-auto min-h-screen">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-justify">
              <h2 className="text-3xl sm:text-4xl font-bold font-josefin">
                About Our Furniture Company
              </h2>
              <p className="text-muted-foreground ">
                At our furniture company, we are passionate about creating
                timeless pieces that elevate the spaces they occupy. Our mission
                is to design and craft furniture that not only looks beautiful,
                but also provides unparalleled comfort and functionality.
              </p>
              <p className="text-muted-foreground">
                With over a decade of experience in the industry, we have honed
                our skills and developed a deep understanding of materials,
                construction, and design. Our team of talented designers and
                skilled artisans work tirelessly to bring our vision to life,
                ensuring that every piece we create is a testament to our
                commitment to quality and innovation.
              </p>
              <p className="text-muted-foreground">
                With over a decade of experience in the industry, we have honed
                our skills and developed a deep understanding of materials,
                construction, and design. Our team of talented designers and
                skilled artisans work tirelessly to bring our vision to life,
                ensuring that every piece we create is a testament to our
                commitment to quality and innovation.
              </p>
              <p className="text-muted-foreground ">
                At our furniture company, we are passionate about creating
                timeless pieces that elevate the spaces they occupy. Our mission
                is to design and craft furniture that not only looks beautiful,
                but also provides unparalleled comfort and functionality.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/img/vector6.png"
                alt="Furniture"
                width={300}
                height={300}
                className="rounded-t-full rounded-bl-full object-cover border border-gray-300 shadow-md bg-gray-200"
              />
              <img
                src="/img/vector1.png"
                alt="Team"
                width={300}
                height={300}
                className="rounded-t-full rounded-br-full object-cover border border-gray-300 shadow-md bg-gray-200"
              />
              <img
                src="/img/vector2.png"
                alt="Furniture"
                width={300}
                height={300}
                className="rounded-b-full rounded-tl-full object-cover bg-gray-200"
              />
              <img
                src="/img/vector5.png"
                alt="Team"
                width={300}
                height={300}
                className="rounded-b-full rounded-tr-full object-cover bg-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10 max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm bg-white">
              Our Team
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-josefin">
              Meet the Makers
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of skilled artisans and designers are the heart and soul
              of our business. Each member brings a unique set of talents and
              experiences, contributing to the creation of our high-quality,
              handcrafted furniture.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium leading-none">Adarsh Thapa</p>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium leading-none">Chandan Bam</p>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium leading-none">Sarah Mayer</p>
                <p className="text-sm text-muted-foreground">
                  Production Manager
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-sm font-medium leading-none">Tom Wilson</p>
                <p className="text-sm text-muted-foreground">
                  Finishing Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
