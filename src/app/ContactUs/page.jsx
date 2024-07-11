"use client";
import { useState } from "react";
// import { supabase } from '../supabase'; // Import your Supabase client
import { supabase } from "../Supabase/config";
import Swal from "sweetalert2";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert data into 'contacts' table in Supabase
      const { data, error } = await supabase.from("ContactUs").insert([
        {
          Name: name,
          Email: email,
          Message: message
        },
      ]);

      if (error) {
        throw error;
      }

      // Clear form after successful submission
      setName("");
      setEmail("");
      setMessage("");
      // Show success message using SweetAlert
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
        timer: 2000, // Close alert after 2 seconds
      });

      // Optionally, show a success message or redirect to a thank you page
    } catch (error) {
      console.error("Error submitting form:", error.message);
      // Handle error state or show error message
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "An error occurred while submitting your message. Please try again later.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-300 via-gray-200 to-transparent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-josefin text-gray-800">
                Contact Us
              </h1>
              <p className="max-w-[700px] md:text-xl text-gray-600">
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
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[120px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
