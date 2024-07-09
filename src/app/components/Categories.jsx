import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../Supabase/config";

const Categories = () => {

    // useEffect(()=>{
    //     const fetchData = () =>{
    //         const {data, error} = await supabase.from()
    //     }
    // })
  return (
    <div>
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
    </div>
  );
};

export default Categories;
