
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/app/components/ui/carousel"
import { Card, CardContent } from "@/app/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-background px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SofaIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Acme Furniture</span>
        </Link>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="grid md:grid-cols-2 gap-8 p-4 md:p-6 lg:p-10">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Carousel
              opts={{ align: "center", loop: true, autoplay: true, interval: 5000 }}
              className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Furniture"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Furniture"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Furniture"
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 hover:bg-background/75 focus:outline-none focus:ring-2 focus:ring-primary">
                <ChevronLeftIcon className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 rounded-full bg-background/50 p-2 hover:bg-background/75 focus:outline-none focus:ring-2 focus:ring-primary">
                <ChevronRightIcon className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-2">
              <h2 className="text-3xl font-bold">Elevate Your Space</h2>
              <p className="text-muted-foreground">
                Discover our range of modern and stylish furniture to transform your home.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <SofaIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Living Room</h3>
                  <p className="text-muted-foreground">Sofas, armchairs, and more.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BedIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Bedroom</h3>
                  <p className="text-muted-foreground">Beds, dressers, and nightstands.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TableIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Dining Room</h3>
                  <p className="text-muted-foreground">Tables, chairs, and more.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LampDeskIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Office</h3>
                  <p className="text-muted-foreground">Desks, chairs, and storage.</p>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Get 20% Off</h3>
                <p className="text-muted-foreground">
                  Use code <span className="font-bold">ACME20</span> at checkout.
                </p>
              </div>
              <Button>Shop Now</Button>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-4">
                <SofaIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Living Room</h3>
                  <p className="text-muted-foreground">Sofas, armchairs, and more.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BedIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Bedroom</h3>
                  <p className="text-muted-foreground">Beds, dressers, and nightstands.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <TableIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Dining Room</h3>
                  <p className="text-muted-foreground">Tables, chairs, and more.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <LampDeskIcon className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Office</h3>
                  <p className="text-muted-foreground">Desks, chairs, and storage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h2 className="text-3xl font-bold">Featured Products</h2>
                <p className="text-muted-foreground">Discover our top-selling furniture pieces.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Minimalist Sofa</h3>
                    <p className="text-muted-foreground">$999</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Wooden Dining Table</h3>
                    <p className="text-muted-foreground">$799</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Leather Armchair</h3>
                    <p className="text-muted-foreground">$599</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Modern Bookshelf</h3>
                    <p className="text-muted-foreground">$399</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">View More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h2 className="text-3xl font-bold">Latest Arrivals</h2>
                <p className="text-muted-foreground">Check out our newest furniture pieces.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Scandinavian Dresser</h3>
                    <p className="text-muted-foreground">$599</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Minimalist Coffee Table</h3>
                    <p className="text-muted-foreground">$399</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Wooden Nightstand</h3>
                    <p className="text-muted-foreground">$249</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Minimalist Desk</h3>
                    <p className="text-muted-foreground">$499</p>
                    <Button className="mt-4">View</Button>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-end">
                <Button variant="outline">View More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <h2 className="text-3xl font-bold">Best Sellers</h2>
                <p className="text-muted-foreground">Our most popular furniture pieces.</p>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <Card>
                  <img
                    src="/placeholder.svg"
                    alt="Product"
                    width={400}
                    height={400}
                    className="rounded-t-lg object-cover w-full h-[200px]"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BedIcon(props) {
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
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function ChevronLeftIcon(props) {
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
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function LampDeskIcon(props) {
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
      <path d="m14 5-3 3 2 7 8-8-7-2Z" />
      <path d="m14 5-3 3-3-3 3-3 3 3Z" />
      <path d="M9.5 6.5 4 12l3 6" />
      <path d="M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" />
    </svg>
  )
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


function TableIcon(props) {
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
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  )
}



import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/app/components/ui/carousel"
import { Card, CardContent } from "@/app/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-background px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SofaIcon className="w-8 h-8" />
          <span className="text-xl font-bold">Furniture Store</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Shop
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <Carousel opts={{ align: "center", loop: true, autoplay: true, interval: 5000 }} className="w-full">
            <CarouselContent>
              <CarouselItem>
                <img src="/placeholder.svg" alt="Furniture Slider 1" className="w-full h-[480px] object-cover" />
              </CarouselItem>
              <CarouselItem>
                <img src="/placeholder.svg" alt="Furniture Slider 2" className="w-full h-[480px] object-cover" />
              </CarouselItem>
              <CarouselItem>
                <img src="/placeholder.svg" alt="Furniture Slider 3" className="w-full h-[480px] object-cover" />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-center gap-2">
                <DownloadIcon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Free Delivery</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <RepeatIcon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Easy Returns</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <WrenchIcon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">2-Year Warranty</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CreditCardIcon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-semibold">Financing Options</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6 flex flex-col items-center gap-6">
            <div className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
              Get 20% Off Your First Order
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Use Coupon Code: FURNITURE20</h2>
            <p className="text-muted-foreground text-lg max-w-md text-center">
              Discover our latest furniture collection and enjoy a special discount on your first purchase.
            </p>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Living Room"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Living Room</h3>
                </div>
              </Link>
              <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Bedroom"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Bedroom</h3>
                </div>
              </Link>
              <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Dining Room"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Dining Room</h3>
                </div>
              </Link>
              <Link href="#" className="group relative overflow-hidden rounded-lg shadow-lg" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt="Office"
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)] flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">Office</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Featured Product 1"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Modern Sofa</h3>
                  <p className="text-muted-foreground text-sm">Comfortable and stylish sofa for your living room.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$899</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Featured Product 2"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Wooden Dining Table</h3>
                  <p className="text-muted-foreground text-sm">Elegant and durable dining table for your kitchen.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$599</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Featured Product 3"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Leather Armchair</h3>
                  <p className="text-muted-foreground text-sm">
                    Comfortable and stylish armchair for your living room.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$399</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Featured Product 4"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Wooden Bookshelf</h3>
                  <p className="text-muted-foreground text-sm">Sturdy and stylish bookshelf for your home office.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$249</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View All
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Latest Product 1"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Modern Desk</h3>
                  <p className="text-muted-foreground text-sm">Sleek and functional desk for your home office.</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$399</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Latest Product 2"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Minimalist Sideboard</h3>
                  <p className="text-muted-foreground text-sm">
                    Sleek and functional storage solution for your living room.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$549</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Latest Product 3"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Recliner Armchair</h3>
                  <p className="text-muted-foreground text-sm">
                    Comfortable and stylish recliner for your living room.
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold">$699</span>
                    <Button variant="outline" size="sm">
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Latest Product 4"
                  className="w-full h-[240px] object-cover rounded-t-lg"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">Wooden TV Stand</h3>
                  <p className="text-muted-foreground text-sm">Stylish and functional TV stand for your living room.</p>
                  <div />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
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
  )
}


function RepeatIcon(props) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
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


function WrenchIcon(props) {
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
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}