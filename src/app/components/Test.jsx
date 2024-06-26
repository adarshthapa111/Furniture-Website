/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1uWel4L1BUf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Founder"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Crafting Timeless Furniture
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At our furniture workshop, we are dedicated to creating high-quality, handcrafted pieces that stand the
                test of time. Led by our founder, Jane Doe, we take pride in our attention to detail and commitment to
                sustainable practices.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our History</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Legacy of Craftsmanship</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our furniture workshop was founded in 1985 by Jane Doe, a skilled woodworker with a passion for creating
                beautiful, functional pieces. Over the years, we have honed our craft, using traditional techniques and
                the finest materials to produce timeless designs that are built to last.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Workshop"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Craftsmanship"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
            />
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Values</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Commitment to Craftsmanship
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At the heart of our business is a deep respect for the craft of furniture making. We believe in using
                only the finest materials and employing traditional techniques to create pieces that are not only
                beautiful, but also built to last. Our commitment to quality and sustainability is reflected in every
                piece we produce.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Makers</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our team of skilled artisans and designers are the heart and soul of our business. Each member brings a
                unique set of talents and experiences, contributing to the creation of our high-quality, handcrafted
                furniture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-sm text-muted-foreground">Master Woodworker</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium leading-none">Jane Lim</p>
                  <p className="text-sm text-muted-foreground">Lead Designer</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium leading-none">Sarah Mayer</p>
                  <p className="text-sm text-muted-foreground">Production Manager</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium leading-none">Tom Wilson</p>
                  <p className="text-sm text-muted-foreground">Finishing Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Acme Furniture. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}