"use client";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import FeatureProducts from "./components/FeatureProducts";
import LatestProducts from "./components/LatestProducts";
import { useEffect, useState } from "react";

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/carousel.json");
        const data = await response.json();
        console.log(data);
        setCarouselData(data);
      } catch (error) {
        console.log("Error fetching error!!");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="">
        <section className="mt-4 bg-gradient-to-b rounded-lg max-w-6xl mx-auto  from-slate-300 via-gray-200 to-transparent shadow-sm border border-gray-100">
          <Carousel className="rounded-t-xl">
            <CarouselContent>
              {carouselData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-between items-center"
                >
                  {item.text && (
                    <div className="flex-1 p-10">
                      <p className="text-sm bg-gradient-to-t from-slate-300 to-transparent capitalize text-gray-600 bg-white px-2 py-1 border-gray-300 shadow-md leading-6  rounded-full inline ">
                        {item.discount}
                      </p>
                      <h1 className="text-4xl tracking-wide leading-snug font-bold text-gray-800 my-4">
                        {item.text}
                      </h1>
                      <p className="text-md capitalize text-gray-600 bg-white px-4 py-1 border-gray-300 shadow-md leading-6  rounded-md inline ">
                        {item.title}
                      </p>
                    </div>
                  )}
                  <div className="flex-1 relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className={item.imageClass}
                      // className="object-contain"
                      height={600}
                      width={600}
                      // className="rounded-r-xl"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* className="w-1/2 text-gray-700 font-bold font-josefin text-xl xl:text-6xl" */}
        <section>
          <section className="py-12 md:py-4 max-w-6xl mx-auto">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-josefin">
                Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                <Link
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-400"
                  prefetch={false}
                >
                  <Image
                    src="/img/living.avif"
                    alt="Living Room"
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-400"
                    height={400}
                    width={400}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold font-josefin">
                      Living Room
                    </h3>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  prefetch={false}
                >
                  <Image
                    src="/img/bedroom.jpg"
                    alt="Bedroom"
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                    height={400}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold font-josefin">
                      Bedroom
                    </h3>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  prefetch={false}
                >
                  <Image
                    src="/img/dining.webp"
                    alt="Dining Room"
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                    height={400}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold font-josefin">
                      Dining Room
                    </h3>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                  prefetch={false}
                >
                  <Image
                    src="/img/office.jpg"
                    alt="Office"
                    className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                    height={400}
                    width={400}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                    <h3 className="text-white text-xl font-semibold font-josefin">
                      Office
                    </h3>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-t from-gray-200 to-transparent grid py-16">
            <div className="mt-10 py-4 max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-josefin px-4 md:px-8">
                Featured
              </h2>
              <div>
                <FeatureProducts />
              </div>
            </div>
          </section>
          <section className="mt-10 py-4 max-w-6xl mx-auto">
            <div className="">

              <div>
                <LatestProducts />
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
