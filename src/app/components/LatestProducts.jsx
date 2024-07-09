// import Link from "next/link";
// import { supabase } from "../Supabase/config";
// import { useState, useEffect } from "react";

// const LatestProducts = () => {
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [fetchError, setFetchError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase
//         .from("Furnitures")
//         .select("*")
//         .order("created_at", { ascending: false }) // Ensure 'created_at' is the date column
//         .limit(10); // Adjust the limit as needed

//       if (data) {
//         setLatestProducts(data);
//         setFetchError(null);
//       }
//       if (error) {
//         setLatestProducts([]);
//         setFetchError(error.message);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <section className="py-12">
//       <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
//         <div className="mb-8 md:mb-12 lg:mb-16">
//           <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl font-josefin">Latest Furniture</h2>
//           <p className="mt-2 text-muted-foreground md:text-lg lg:text-xl">
//             Discover our newest collection of modern and stylish furniture.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {latestProducts.map((product) => (
//             <div key={product.id} className="rounded-lg bg-background shadow-sm transition-all hover:shadow-lg">
//               <Link href="#" className="block" prefetch={false}>
//                 <img
//                   src={product.Image || "/placeholder.svg"}
//                   alt={product.Name}
//                   width={400}
//                   height={400}
//                   className="h-60 w-full rounded-t-lg object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold">{product.Name}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text">{product.Description}</p>
//                 </div>
//               </Link>
//             </div>
//           ))}
//         </div>
//         {fetchError && <div className="text-red-500 mt-4">{fetchError}</div>}
//       </div>
//     </section>
//   );
// };

// export default LatestProducts;
  "use client"
  import Link from "next/link";
  import { supabase } from "../Supabase/config";
  import { useState, useEffect } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/navigation";
  import "swiper/css/pagination";
  import { Navigation, Scrollbar, A11y, Pagination } from "swiper/modules";

  const LatestProducts = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [swiperLoaded, setSwiperLoaded] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const { data, error } = await supabase
            .from("Furnitures")
            .select("*")
            .order("created_at", { ascending: false })
            .limit(20);

          if (data) {
            setLatestProducts(data);
            setFetchError(null);
            setSwiperLoaded(true); // Signal that swiper data has been loaded
          }
          if (error) {
            setLatestProducts([]);
            setFetchError(error.message);
          }
        } catch (error) {
          console.error("Error fetching data:", error.message);
          setFetchError("Error fetching data");
        }
      };

      fetchData();
    }, []);

    return (
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl font-josefin">
              Latest Furniture
            </h2>
            <p className="mt-2 text-muted-foreground md:text-lg lg:text-xl">
              Discover our newest collection of modern and stylish furniture.
            </p>
          </div>

          {latestProducts.length > 0 &&
            swiperLoaded && ( // Render Swiper only when products exist and swiper is loaded
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                navigation
                modules={[Scrollbar, Pagination, Navigation]}
              >
                {latestProducts.map((product) => (
                  <SwiperSlide key={product.id}>
                    <div className="rounded-lg bg-background shadow-sm transition-all hover:shadow-lg border">
                      <Link href="#" className="block" prefetch={false}>
                        <img
                          src={product.Image || "/placeholder.svg"}
                          alt={product.Name}
                          width={400}
                          height={400}
                          className="h-60 w-full rounded-t-lg object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold">
                            {product.Name}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 text-justify">
                            {product.Description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

          {fetchError && <div className="text-red-500 mt-4">{fetchError}</div>}
          {latestProducts.length === 0 &&
            swiperLoaded && ( // Display message when no products are available after swiper is loaded
              <p className="text-center text-gray-500 mt-8">No products found.</p>
            )}
        </div>
      </section>
    );
  };

  export default LatestProducts;
