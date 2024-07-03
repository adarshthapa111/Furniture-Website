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
import Card from "./components/Card";
import FeatureProducts from "./components/FeatureProducts";
import LatestProducts from "./components/LatestProducts";

export default function Home() {
  return (
    <>
      <div className="">
        <section className="bg-gradient-to-b from-gray-800 via-gray-400 to gray-200">
          <Carousel className="max-w-6xl mx-auto rounded-t-xl">
            <CarouselContent>
              <CarouselItem className="flex justify-center items-center">
                <Image
                  src="/img/vector2.png"
                  className="h-96 w-[600px]"
                  height={1200}
                  width={600}
                />
                <p className="text-xl md:text-4xl xl:text-6xl font-semibold text-white font-josefin hidden xl:inline">
                  Grab your chair with us 40% this Friday !{" "}
                </p>
              </CarouselItem>
              <CarouselItem className="flex justify-center items-center">
                <Image
                  src="/img/vector1.png"
                  className="h-96 w-96"
                  height={1200}
                  width={600}
                />
                <p className="text-xl md:text-4xl xl:text-6xl font-semibold text-white font-josefin hidden xl:inline">
                  Grab our latest Sofa with 20% discount !{" "}
                </p>
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/img/vector3.png"
                  className="h-96 w-96"
                  height={1200}
                  width={1200}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/img/vector6.png"
                  className="h-96 w-96"
                  height={1200}
                  width={1200}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/img/vector8.png"
                  className="h-96 w-96"
                  height={1200}
                  width={1200}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src="/img/vector9.png"
                  className="h-96 w-96"
                  height={1200}
                  width={1200}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-josefin px-4 md:px-6">
                Latest
              </h2>
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
