
import Link from "next/link";

const LatestProducts=()=> {
  const products = [
    {
      id: 1,
      image: "/placeholder.svg",
      name: "Minimalist Sofa",
      description: "Sleek and comfortable modern sofa",
    },
    {
      id: 2,
      image: "/placeholder.svg",
      name: "Wooden Dining Table",
      description: "Elegant solid wood dining table",
    },
    {
      id: 3,
      image: "/placeholder.svg",
      name: "Scandinavian Armchair",
      description: "Cozy and stylish accent chair",
    },
    {
      id: 4,
      image: "/placeholder.svg",
      name: "Industrial Bookshelf",
      description: "Versatile and durable storage unit",
    },
  ]
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl font-josefin">Latest Furniture</h2>
          <p className="mt-2 text-muted-foreground md:text-lg lg:text-xl">
            Discover our newest collection of modern and stylish furniture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="rounded-lg bg-background shadow-sm transition-all hover:shadow-lg">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-60 w-full rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestProducts;