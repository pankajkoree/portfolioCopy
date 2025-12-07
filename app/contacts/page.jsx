"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// components imported
import { toast } from "react-hot-toast";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success === true) {
      e.target.reset();
      toast.success("Message sent successfully.");
    } else {
      toast.error("Failed to send the message");
    }
  };
  return (
    <div className="relative w-full">
      <div className="relative mx-auto lg:w-[40%] flex flex-col border">
        {/* complete nav bar */}
        <NavBar />

        {/* Navbar heading */}
        <h1 className="text-5xl font-bold text-center mt-20">Contact</h1>
        {/* end Navbar heading */}

        <div className="relative flex flex-col justify-center">
          <p className="text-center px-6 py-4 text-3xl border-b">
            Feel free to reach out if you have any questions or would like to
            collaborate!
          </p>

          <div className="mt-8 flex flex-col px-6 py-4 border-b">
            <h2 className="text-2xl"> Get in touch</h2>
            <p className="text-xl">
              Fill out the form below, and I&apos;ll respond as quickly as I
              can.
            </p>
          </div>

          {/* form */}
          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col px-6 py-4 gap-[21px] text-xl"
          >
            <div className="flex flex-col">
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="message">Message:</Label>
              <Textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message..."
                required
              ></Textarea>
            </div>

            <div className="text-center">
              <Button variant="submit" type="submit">
                Send Message
              </Button>
            </div>
          </form>

          {/* end form */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default page;
