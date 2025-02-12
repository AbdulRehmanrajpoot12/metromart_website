import Container from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
  return (
    <Container className="max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold font-integral mb-6">Contact Us</h1>

      <h3 className="text-xl font-montserrat font-semibold mb-2">
        We'd Love to Hear from You!
      </h3>

      <p className="mb-6 font-satoshi">
        Have a question, suggestion, or just want to say hello? Fill out the
        form below, and our friendly team will get back to you in no time. At
        MetroMart, your thoughts matter, let's connect and make your experience
        even better!
      </p>

      <form className="space-y-4">
        <div className="space-y-0.5">
          <Label htmlFor="name" className="font-agrandir">
            Full Name:
          </Label>
          <Input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="space-y-0.5">
          <Label htmlFor="email" className="font-agrandir">
            Email:
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div className="space-y-0.5">
          <Label htmlFor="message" className="font-agrandir">
            Message:
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-darkColor/80 text-white px-6 py-3 rounded-md text-sm font-semibold font-agrandir hover:bg-darkColor hoverEffect"
        >
          Send Message
        </button>
      </form>
    </Container>
  );
};

export default ContactPage;
