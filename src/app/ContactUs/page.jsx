"use client";

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactUs() {
  return (
    <div className="">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-800 via-gray-400 to-gray-200">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-josefin">
                Contact Us
              </h1>
              <p className="max-w-[700px] md:text-xl">
                Get in touch with our team for any questions or inquiries about
                our furniture products and services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 max-w-6xl mx-auto">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter font-josefin">
                Contact Us
              </h2>
              <p className="text-muted-foreground mt-2">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <form className="mt-6 space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </div>
            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.7297115330106!2d-73.99024568423844!3d40.72911497932921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2s123%20Main%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sus!4v1686080400000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
