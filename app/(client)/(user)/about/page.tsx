import Container from "@/components/Container";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="max-w-6xl lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6 font-integral">About Us</h1>

      <h3 className="text-xl font-semibold mb-2 font-montserrat">
        Welcome to MetroMart!
      </h3>

      <p className="mb-4 font-satoshi">
        At MetroMart, we redefine your online clothing shopping experience. With
        a focus on style, quality, and affordability, our collection caters to
        diverse tastes and trends. Whether you're seeking timeless classics or
        the latest fashion statements, we bring you the best in modern apparel
        for every occasion.
      </p>

      <h3 className="text-xl font-semibold mb-2 font-montserrat">
        Our Mission:
      </h3>

      <p className="mb-4 font-satoshi">
        We aim to make fashion accessible to everyone, blending quality
        craftsmanship with contemporary designs. By carefully curating our
        collections, we ensure that every piece reflects the latest trends while
        maintaining comfort and durability. Your satisfaction is our priority,
        and we strive to offer an effortless and enjoyable shopping experience.
      </p>

      <h3 className="text-xl font-semibold mb-2 font-montserrat">
        Why Choose MetroMart?
      </h3>

      <p className="font-satoshi mb-4">
        MetroMart is more than just a clothing store—it's a commitment to
        excellence. We prioritize customer satisfaction, offering a seamless
        online shopping journey, quick deliveries, and responsive support. Join
        us in celebrating individuality and expressing your unique style with
        our handpicked clothing selection.
      </p>
    </Container>
  );
};

export default AboutPage;
