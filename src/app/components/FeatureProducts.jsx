import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="text-foreground">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Product</span>
              </Link>
              <Image
                src="/img/whiteChiar.webp"
                alt="Product 1"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-600 to-transparent p-4">
                <h3 className="text-xl font-bold text- text-white">
                  Minimalist Armchair
                </h3>
                <p className="text-sm  text-white">
                  Elegant and comfortable
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Product</span>
              </Link>
              <Image
                src="/img/table.jpg"
                alt="Product 2"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-600 to-transparent p-4">
                <h3 className="text-xl font-bold text-foreground text-white">Minimal Table</h3>
                <p className="text-sm text-muted-foreground text-white">Timeless design</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Product</span>
              </Link>
              <Image
                src="/img/singlebed.jpg"
                alt="Product 3"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-600 to-transparent p-4">
                <h3 className="text-xl font-bold text-foreground text-white">
                  Minimalist Armchair
                </h3>
                <p className="text-sm text-muted-foreground text-white">
                  Elegant and comfortable
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View Product</span>
              </Link>
              <Image
                src="/img/bookrack.webp"
                alt="Product 4"
                width={500}
                height={400}
                className="object-cover w-full h-64"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-600 to-transparent p-4">
                <h3 className="text-xl font-bold text-foreground text-white">
                   Bookshelf
                </h3>
                <p className="text-sm text-muted-foreground text-white">Timeless design</p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Product</span>
            </Link>
            <Image
              src="/img/whiteChiar.webp"
              alt="Latest Product"
              width={800}
              height={600}
              className="object-cover w-full h-80"
            />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <h3 className="text-2xl font-bold text-foreground">
                Minimalist Desk
              </h3>
              <p className="text-sm text-muted-foreground">
                Sleek and functional
              </p>
              <h4 className="text-xl font-semibold text-foreground">$499</h4>
              <Button className="mt-4">Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
